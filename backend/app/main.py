from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "AI Team Platform Backend Running 🚀"
    }