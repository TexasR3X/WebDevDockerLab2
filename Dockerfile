FROM node:latest

LABEL maintainer="TexasR3X"
LABEL description="This is a lab to practice creating a docker image and running a container in it."
LABEL cohort="19"

EXPOSE 8080

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]