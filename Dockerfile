FROM node:latest

ENV COTE_USE_HOST_NAMES=true

WORKDIR /src
ADD . .

RUN npm install
