FROM unumotors/docker-alpine-node:latest

ENV COTE_USE_HOST_NAMES=true
ENV COTE_MULTICAST_ADDRESS=239.1.21.121

WORKDIR /src
ADD . .

RUN npm install
