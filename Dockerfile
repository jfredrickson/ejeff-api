FROM node:carbon-alpine

WORKDIR /srv/api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
