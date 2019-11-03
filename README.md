# Module 2

Repo for the third module of the GoStack bootcamp

* Fill .env file

* Docker installs:
    
    `docker run --name postgres -d -p 5432:5432 postgres`
    
    `docker run --name mongobarber -p 27017:27017 -d  -t mongo`

    `docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`

* Run migrations: `npx sequelize-cli db:migrate`
    
* Start mongo, postgres, redis 
