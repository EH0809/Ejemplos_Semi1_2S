FROM node:16-alpine
WORKDIR /Servidor
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 4062

CMD [ "npm", "start" ]
