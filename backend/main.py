from fastapi import FastAPI;
from data.documents_data import file_list
app = FastAPI()

@app.get("/")
def get_documents():
    return file_list
