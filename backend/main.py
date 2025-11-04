from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from data.documents_data import file_list
from models.doc import Document
from typing import List
from dto.search_dto import SearchDto
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/generate")
def find_documents(
    request: SearchDto,
):
    query = request.query.lower().strip()
    results = []
    for doc in file_list:
        if query in doc.title.lower() or query in doc.description.lower():
            results.append(doc)
    if not results:
        raise HTTPException(
            status_code=404,
            detail=f"No documents found matching query: '{request.query}'",
        )
    return results
