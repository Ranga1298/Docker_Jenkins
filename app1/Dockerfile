FROM node:20-alpine

WORKDIR /ranga/app1/

COPY package.json .
COPY app1/hello-world.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "hello-world.js"]
