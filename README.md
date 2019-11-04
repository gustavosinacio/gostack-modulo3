# Module 3

Repo for third module of the GoStack bootcamp

## ABOUT

This API uses docker, docker redis:alpine, docker mongo

### REDIS



### MONGO



### POSTGRES


* Fill .env file

* Docker installs:

    _If your have postgres installed locally, use port 5433_

    `docker run --name postgres -p 5433:5432 -d -t postgres`

    `docker run --name mongobarber -p 27017:27017 -d  -t mongo`

    `docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`

* Run migrations: `npx sequelize-cli db:migrate`

* Start mongo, postgres, redis
