FROM node:20-alpine

WORKDIR /praneeth/app/

COPY package.json .
COPY newplace.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "newplace.js"]
