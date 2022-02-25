FROM node:16.14.0-alpine3.15

LABEL username <roger10cassares@gmail.com>

RUN apk update \
    && apk add tzdata \
    && apk add git

ENV TZ=America/Sao_Paulo

# Create app directory
WORKDIR /usr/src/app

RUN echo '{ "allow_root": true }' > /root/.bowerrc

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./nodejs_smartcampus_pier9iot/package.json ./
COPY ./nodejs_smartcampus_pier9iot/bower.json ./

# RUN yarn
# If you are building your code for production
RUN rm -rf node_modules && yarn install --frozen-lockfile

# Bundle app source
COPY ./nodejs_smartcampus_pier9iot ./

EXPOSE 7300
CMD [ "yarn", "start" ]
