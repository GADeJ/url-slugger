FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN yarn install
EXPOSE 3000
MAINTAINER developer
CMD ["yarn", "start"]
