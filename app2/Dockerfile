FROM node:20-alpine

WORKDIR /ranga/app/

COPY package.json .
COPY app2/nextplace.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "newplace.js"]
