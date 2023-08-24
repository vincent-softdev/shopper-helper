# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory in the container to /app
WORKDIR /app

# Add current directory code to /app in the container
ADD . /app

# Install any needed packages specified in requirements.txt
# RUN apt-get install libgl1-mesa-glx
RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Run main.py when the container launches
CMD python -m uvicorn main:app --host 0.0.0.0 --port 80
# CMD python -m uvicorn main:app