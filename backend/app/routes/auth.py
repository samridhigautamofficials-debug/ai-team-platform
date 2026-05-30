from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.exc import IntegrityError

from app.database import SessionLocal
from app.models.user import User
from app.schemas.user import UserCreate, UserLogin, UserProfile

from app.utils.auth import hash_password, verify_password
from app.utils.jwt import create_access_token
from app.utils.auth_bearer import get_current_user
from app.ai.matching import calculate_match

router = APIRouter()

# -------------------------
# SIGNUP
# -------------------------
@router.post("/signup")
def signup(user: UserCreate):

    db = SessionLocal()

    try:
        new_user = User(
            username=user.username,
            email=user.email,
            password=hash_password(user.password)
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return {
            "message": "User created successfully 🚀",
            "id": new_user.id
        }

    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail="Email already exists ❌"
        )

    finally:
        db.close()


# -------------------------
# LOGIN
# -------------------------
@router.post("/login")
def login(user: UserLogin):

    db = SessionLocal()

    try:
        existing_user = db.query(User).filter(
            User.email == user.email
        ).first()

        if not existing_user:
            raise HTTPException(
                status_code=404,
                detail="User not found"
            )

        if not verify_password(user.password, existing_user.password):
            raise HTTPException(
                status_code=401,
                detail="Invalid password"
            )

        token = create_access_token(
            {"user_id": existing_user.id}
        )

        return {
            "access_token": token
        }

    finally:
        db.close()


# -------------------------
# UPDATE PROFILE
# -------------------------
@router.put("/update-profile")
def update_profile(
    user_profile: UserProfile,
    user_id: int = Depends(get_current_user)
):

    db = SessionLocal()

    user = db.query(User).filter(User.id == user_id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    user.skills = user_profile.skills
    user.interests = user_profile.interests
    user.experience = user_profile.experience
    user.bio = user_profile.bio

    db.commit()

    return {"message": "Profile updated successfully 🚀"}


# -------------------------
# RECOMMEND TEAMMATES
# -------------------------
@router.get("/recommend-teammates")
def recommend_teammates(user_id: int = Depends(get_current_user)):

    db = SessionLocal()

    current_user = db.query(User).filter(User.id == user_id).first()

    all_users = db.query(User).filter(User.id != user_id).all()

    recommendations = []

    for user in all_users:

        score = calculate_match(
            current_user.skills,
            user.skills
        )

        recommendations.append({
            "username": user.username,
            "skills": user.skills,
            "interests": user.interests,
            "experience": user.experience,
            "bio": user.bio,
            "score": f"{score}%"
        })

    recommendations.sort(
        key=lambda x: float(x["score"].replace("%", "")),
        reverse=True
    )

    return {
        "recommended_teammates": recommendations
    }