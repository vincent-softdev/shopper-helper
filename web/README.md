## Description
You need to install Docker first

## Knowledge applied
### S.O.L.I.D principle
Desgin principle
Stands for: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion (Rober Cecil Martin)

Ref: https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898

### D.D.D principle

Stands for: Domain-Driven Design

Domain: in our project, domain is a page

### Style components

1. styled-component: https://styled-components.com/docs/advanced#theming

## Set up

### Run in VM for product test
Build the docker
-> this docker build will create a container and generate an image to the container
```
docker build -t shopper_helper_web .
```

run the docker container by the image
-> this running type will allow read only. What ever you change won't effect the one currently running
```
docker run -p 3000:80 shopper_helper_web
```

### Run in local for dev work

Install dependencies

```
yarn install
```

Start the local web

```
yarn start
```

## Output