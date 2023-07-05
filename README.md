# Database

```bash
docker pull postgres

docker run 
  --name trips 
  -p 5455:5432 
  -e POSTGRES_USER=postgres 
  -e POSTGRES_PASSWORD=postgres 
  -e POSTGRES_DB=trips 
  -d postgres

docker start trips
```
