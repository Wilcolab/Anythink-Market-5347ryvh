FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --production

COPY . .

RUN chown -R node:node /usr/src/app

USER node
EXPOSE 8001

CMD ["node", "src/server.js"]