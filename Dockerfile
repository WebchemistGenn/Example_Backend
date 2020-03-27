FROM node:10.16.0

ARG DOCKER_ENV

ENV DOCKER_ENV=$DOCKER_ENV

RUN echo $DOCKER_ENV

RUN mkdir -p /app

WORKDIR /app

ADD . /app

RUN yarn

EXPOSE 80

ENTRYPOINT yarn ${DOCKER_ENV}
