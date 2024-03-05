FROM node:alpine
WORKDIR /front-end
COPY package.json ./
RUN npm install
RUN npm install -g serve
COPY . .
CMD ["npm", "run", "production"]
EXPOSE 3000