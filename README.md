# Restaurant - Microservices - Docker
This is a small microservice architecure of a restaurant system which has been dockerized using Node.js, Express and MongoDb.
This services uses the dependences *axios, dotenv, express, and mongoose* to run which will be downloaded automatically

## Prequisites ?

- !IMPORTANT: Make sure you have npm version 8.12.1 atleast which is the latest up to date when writing this document. If not, update with the command : *npm install -g npm@8.12.1* or *npm install -g npm@latest*.

- !IMPORTANT: The application uses docker service to run inside containers so you need to install *docker* on your computer to be able to containerize the services. 

- !IMPORTANT: You need to install *docker compose* to build and execute the services containers. 

- !Facultative: If you may need further to use the deployed mongo image on you local machine, you will need to have mongoDB installed on you computer. The container is configured to expose a local port that you will use to execute it on your local machine with the command :   *mongosh --port HERE_THE_EXPOSED PORT*.

## How to execute this application ?

- 1) On your local machine:

    - For each services (foods, orders, users), use your terminal to navigate to their root directories, and install their dependencies using the command : npm install.

    - Then still on the service root directory, run the command : npm run dev. This will execute the service using nodemon. 

    - To test this service, make sure that you have mongoDB installed locally on your computer and that it's service is running on localhost using the port 27017. That's the port mongoDB will use to establish connection with the restaurant service.

    - If you recieve in your terminal *connection successful* then that signifies that the connection has been established and you can test the service routes.

### What are the routes of each service ?

- Each service permits to get, getAll, create and delete their entities in the mongo database. The format is: 
    - *Getting all the entities*: '/service_name/' eg for foods service: *'/foods/'*
    - *Getting one entity*: '/service_name/entity_identifier' eg for foods service: *'/foods/12345'* 
    - *Creating one entity*: '/service_name/create' eg for foods service: *'/foods/create'*
    - *Deleting one entity*: '/service_name/delete/service_identifier' eg for foods service: *'/foods/delete/12345'*

- 2) On the docker containers

    - To run this services on the docker containers, here is how we will proceed:
        - 1) Navigate to a service root directory. For example *'/restaurant_microservices_docker/foods'* for the foods service
        - 2} Depending on if you have an old or new verions of docker compose, you will type the command : 
            * Using an old version : *docker-compose up* (here you can use -d or not)  
            * Using a newer version : *docker compose up* (here you can use -d or not)  

Have Fun!

This document has been edited by FENYEP WANGUE on the 12/june/2022.