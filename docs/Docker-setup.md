# Docker setup

Docker has been used to make development and deployment much easier.
When docker is installed the only command needed to run to get the
development server up is

```
docker compose up
```

Docker will automatically download the needed images from docker
hub and build the custom images.

Each component is encapsulated in its own docker container.
The ```docker-compose.yml``` connects the backend with the database and
the frontend with the backend. The backend is not allowed to start before
a health check on the database has been passed.