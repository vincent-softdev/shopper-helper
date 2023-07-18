## Description
You need to install Docker first


## S.O.L.I.D principle
Desgin principle
Stands for: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion (Rober Cecil Martin)





Ref: https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898

## Set up

Build the docker
-> this docker build will create a container and generate an image to the container
```
docker build -t shopper_helper_app .
```

run the docker container by the image
-> this running type will allow read only. What ever you change won't effect the one currently running
```
docker run -p 5000:5000 -d shopper_helper_app
```

## Output