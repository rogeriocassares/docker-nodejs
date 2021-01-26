FROM node:14.15.1-alpine3.12

MAINTAINER username <roger10cassares@gmail.com>

RUN apk update \
    && apk add tzdata

ENV TZ=America/Sao_Paulo

##Next lines creates the Docker file image for nodejs

RUN mkdir -p /usr/src/app/node_modules \
    && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY ./src/weblab-app-example/package*.json ./

RUN npm install

COPY ./src/weblab-app-example ./

COPY --chown=node:node . .

USER node

EXPOSE 3300

CMD [ "node", "app.js" ]
