# Docker Lab 2 - Creating a Docker Image

Use the following commands to deploy a simple server using docker:

```bash
# Build Image:
$ docker build -t lab2-image:latest .

# Run Container:
$ docker run -d --rm --name lab2-container -p 8080:8080 lab2-image:latest
```