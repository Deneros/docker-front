FROM node:18.14.2-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

EXPOSE 3000

RUN chown -R node:node /app

CMD ["npm", "start"]