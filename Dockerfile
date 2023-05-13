FROM node:16.12-alpine

WORKDIR /app

ADD . /app
ADD package.json /app

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]
