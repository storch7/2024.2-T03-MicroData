FROM node:18

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g nodemon
RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "start"]

 
