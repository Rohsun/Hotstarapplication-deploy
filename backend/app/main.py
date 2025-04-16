from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to Hotstar clone backend"}

@app.get("/videos")
def list_videos():
    return [
        {"id": 1, "title": "Avengers Endgame", "url": "/video/1"},
        {"id": 2, "title": "Loki Season 1", "url": "/video/2"}
    ]

