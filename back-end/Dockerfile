FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY . .
RUN npm install npm@latest
CMD ["npm", "run", "dev"]
EXPOSE 8000