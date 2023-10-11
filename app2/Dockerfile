FROM node:20-alpine

WORKDIR /ranga/app2_jenkins/

COPY package.json .
COPY app2/nextplace.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "nextplace.js"]
