# Linux Machine
# -> Linux + Node js with version 22
FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --production

COPY . .

ENV MONGO_URI="mongodb://mongodb-container/dockerDB" PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
