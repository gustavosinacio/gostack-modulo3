import os

os.system('docker run --name postgres -p 5433:5432 -d -t postgres')
os.system('docker run --name mongobarber -p 27017:27017 -d  -t mongo')
os.system('docker run --name redisbarber -p 6379:6379 -d -t redis:alpine')
