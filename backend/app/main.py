from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.auth import router as auth_router
from app.database import engine, Base

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# -------------------------
# CORS (IMPORTANT FIX)
# -------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://ai-team-platform-eight.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------
# ROUTES
# -------------------------
app.include_router(auth_router)

# -------------------------
# TEST ROUTE
# -------------------------
@app.get("/")
def home():
    return {"message": "AI Team Platform Backend Running 🚀"}