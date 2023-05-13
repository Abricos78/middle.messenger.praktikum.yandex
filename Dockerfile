FROM node:18.14.0

WORKDIR /app

ADD . /app
ADD package.json /app/package.json

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]
