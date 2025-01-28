# Docker Labs 2 and 3

Both labs deploy a simple server with the following endpoints:
- `GET /`
- `GET /hello`
- `GET /good-bye`

## Lab 2 - Creating a Docker Image

Use the following commands to deploy a simple server using Docker:

```bash
# Build Image:
docker build -t lab2-image:latest .

# Run Container:
docker run -d --rm --name lab2-container -p 8080:8080 lab2-image:latest
```

Connect to this server on port 8080.

## Lab 3 - Create Compose Stack

Use the following command to deploy a docker stack that deploys the same server as the one above:

```bash
# Deploy Stack:
docker stack deploy -c docker-compose.yaml test-stack

# Re-scaling the number instances in service1:
docker service scale test-stack_service1=<number-of-instances>
    # Examples:
    docker service scale test-stack_service1=7
    docker service scale test-stack_service1=2

# Delete Stack:
docker stack rm test-stack
```

Connect to this server on port 3000.