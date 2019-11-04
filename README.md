# Module 3

Repo for third module of the GoStack bootcamp

## ABOUT

This API uses docker, redis, mongo

### REDIS

docker run --name redisbarber -p 6379:6379 -d -t redis:alpine


### MONGO

docker run --name mongobarber -p 27017:27017 -d -t mongo


### POSTGRES

_If your have postgres installed locally, use port 5433_
docker run --name database -p 5433:5432 -d -t postgres
