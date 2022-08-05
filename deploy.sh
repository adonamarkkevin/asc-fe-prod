docker stop asc_prod_fe
docker rm asc_prod_fe
docker rmi asc-fe

docker build -t asc-fe . --memory 2048MB
docker run -d -p 4200:4200 --name asc_prod_fe asc-fe
docker image prune -f