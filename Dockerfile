FROM node:20.10.0
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start"]

