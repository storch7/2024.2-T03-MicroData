FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Adicione a instalação do react-router-dom
RUN npm install react-router-dom

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
