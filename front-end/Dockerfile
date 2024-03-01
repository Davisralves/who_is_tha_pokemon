FROM node:alpine
WORKDIR /front-end
COPY package.json ./
COPY . .
RUN npm install
RUN npm install -g serve
CMD ["npm", "run", "production"]
EXPOSE 3000