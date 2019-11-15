yum install psql

docker pull pstgres:11.5
docker run --name mathgame-postgres --publish=5432:5432 -e POSTGRES_PASSWORD=mypassword -d postgres:11.5
docker exec -it mathgame-postgres psql -U postgres

# get IP
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mathgame-postgres
172.17.0.3

psql -h 172.17.0.3 -U postgres

# SQL Scripts
CREATE USER mathgame WITH PASSWORD 'mathgame';
CREATE USER mathgame_reader WITH PASSWORD 'reader';
CREATE DATABASE mathgame WITH ENCODING 'utf8' OWNER mathgame;
#Logout and login as mathgame
#CREATE SCHEMA IF NOT EXISTS mathgame AUTHORIZATION mathgame;
#GRANT SELECT ON ALL TABLES IN SCHEMA mathgame TO mathgame_reader;

#Connect to database
docker exec -it mathgame-postgres psql -U mathgame mathgame
	
