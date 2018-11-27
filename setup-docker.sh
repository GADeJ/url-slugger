#!/bin/bash

echo ""
echo ""
echo "UBUNTU 18.04: url-slugger"

echo ""
echo "-------------------------------------"
echo "| Removing all images and container |"
echo "-------------------------------------"

echo ""
echo "****** Stopping all containers ******"
docker stop $(docker ps -a -q)

echo ""
echo "****** Removing all containers ******";
docker rm $(docker container ls -a -q)

echo ""
echo "******** Removing all images ********"
docker rmi $(docker images -a -q)

echo ""
echo "******* Removing all volumes ********"
docker volume rm $(docker volume ls -q)

echo ""
echo "********** Purging docker ***********"
docker system prune -af
echo ""

echo ""
echo "-------------------------------------"
echo "| Configuring images and container  |"
echo "-------------------------------------"

echo ""
echo "********* Configuring mysqyl ********"
docker pull mysql
docker run --name=mysql --env MYSQL_ROOT_PASSWORD=root --env MYSQL_ROOT_HOST=% -d mysql

echo ""
echo "********* Configuring nginx *********"
cd ~/nginx-docker
docker build -t dev/load-balance-nginx .
docker run -p 80:8080 -d dev/load-balance-nginx

echo ""
echo "********* Configuring nodejs ********"
cd ~/Code/src/github.com/url-slugger
docker build -t dev/node-web-app .
docker run --name=app1 --env DB_PASS='!EasyD0351t;' --env 'NUID=1' --env-file env.list --link mysql -p 3001:3000 -d dev/node-web-app
docker run --name=app2 --env DB_PASS='!EasyD0351t;' --env 'NUID=2' --env-file env.list --link mysql -p 3002:3000 -d dev/node-web-app
docker run --name=app3 --env DB_PASS='!EasyD0351t;' --env 'NUID=3' --env-file env.list --link mysql -p 3003:3000 -d dev/node-web-app

echo ""
echo "******* Configuring database ********"
docker exec -i mysql mysql -uroot -proot < ~/Code/src/github.com/url-slugger/documentation/schema.sql

echo ""
echo "UBUNTU 18.04: Setup completed"
echo ""
echo ""
