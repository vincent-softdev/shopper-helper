from PIL import Image
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from io import BytesIO
import os
import ml.OCR as ocr

app = FastAPI()

origins = [
    "http://localhost:3000",  # React app address, adjust if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/image/upload')
async def blur_image(image: UploadFile = File(...)):
    # Save the uploaded image temporarily
    image_data = await image.read()
    
    temp_file = f"temp_{image.filename}"
    with open(temp_file, "wb") as f:
        f.write(image_data)

    print(f"Received image with filename {image.filename} and file type {image.content_type}")

    # temp_file used to send to draw_bbox
    ocrResult = ocr.draw_bbox(temp_file)

    return {"filename": image.filename, "filetype": image.content_type, "ocr_results": ocrResult}