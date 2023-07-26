## Description
You need to install Docker first

## Set up

Build the docker
-> this docker build will create a container and generate an image to the container
```
docker build -t shopper_helper_server .
```

run the docker container by the image
-> this running type will allow read only. What ever you change won't effect the one currently running
```
docker run -p 80:80 -d shopper_helper_server
```

Note: It seems like the docker has some trouble while trying to install easyocr -> always asking for downloading whenever Docker starts. 
-> still not run the system, just download then it stop.

## Run locally

```
uvicorn main:app --reload
```

## Output