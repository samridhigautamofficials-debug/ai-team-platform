from pydantic import BaseModel


# -------------------------
# SIGNUP SCHEMA
# -------------------------

class UserCreate(BaseModel):

    username: str
    email: str
    password: str


# -------------------------
# LOGIN SCHEMA
# -------------------------

class UserLogin(BaseModel):

    email: str
    password: str


# -------------------------
# PROFILE SCHEMA
# -------------------------

class UserProfile(BaseModel):

    skills: str
    interests: str
    experience: str
    bio: str