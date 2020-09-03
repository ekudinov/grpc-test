# grpc-test

# Project for test grpc-web and grpc via microservices communications.

This project has two parts: backend(go1.14) and frontend (angular10). 

## Interaction diagram

![GitHub Logo](/imgs/4.png)

## Tools and technologies:

1. https://github.com/go-kit/kit [GitHub](https://github.com/go-kit/kit) - programming toolkit for building microservices

2. https://github.com/metaverse/truss [GitHub](https://github.com/metaverse/truss) - boilerplate code generation for go-kit 

3. https://github.com/envoyproxy/envoy [GitHub](https://github.com/envoyproxy/envoy) - api gateway

4. https://github.com/grpc/grpc-go [GitHub](https://github.com/grpc/grpc-go) - go grpc

5. https://github.com/ngx-grpc/ngx-grpc [GitHub](https://github.com/ngx-grpc/ngx-grpc) - grpc-web for angular

6. Docker, docker-compose

## How run project

1. `docker-compose up -d` 
2. For test backend you must create cli client command `make client` in backend/history and backend/calculator
3. Checking: `./client add 4 6`  must return  `Response result:10` and `./client all` -> `Response result for get all:[id:"54760c28-d5cd-4c5b-a3a7-89e69fc705e2" name:"add" a:4 b:6 result:10 time:"2020-09-03 03:45:48.006184786 +0000 UTC m=+443.824024003" ]`
4. In front/grpc-web/  directory `ng serve` and go to http://localhost:4200/ 

![GitHub Logo](/imgs/1.png)

![GitHub Logo](/imgs/2.png)

![GitHub Logo](/imgs/3.png)

