FROM node:fermium
WORKDIR /srv/api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
