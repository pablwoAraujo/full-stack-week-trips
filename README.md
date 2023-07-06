## Database
First, start a database with docker:

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

## Getting Started

Run the development server:

```bash
yarn dev
```