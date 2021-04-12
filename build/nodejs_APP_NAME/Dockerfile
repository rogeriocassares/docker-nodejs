FROM node:14.16.1-alpine3.12

MAINTAINER username <roger10cassares@gmail.com>

RUN apk update \
    && apk add tzdata

ENV TZ=America/Sao_Paulo

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./src/nodejs_APP_NAME_app/package*.json ./

# RUN yarn
# If you are building your code for production
RUN rm -rf node_modules && yarn install --frozen-lockfile

# Bundle app source
COPY ./src/nodejs_APP_NAME_app ./

EXPOSE 3000
CMD [ "node", "index.js" ]
