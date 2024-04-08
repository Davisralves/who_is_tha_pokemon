FROM node:alpine
WORKDIR /front-end
COPY package.json ./
COPY . .
RUN npm install -g serve
RUN npm install --omit=dev
CMD ["npm", "run", "production"]
EXPOSE 3000