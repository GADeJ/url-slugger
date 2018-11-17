FROM node:6.10.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN yarn install
EXPOSE 3000
MAINTAINER developer
CMD ["yarn", "start"]
