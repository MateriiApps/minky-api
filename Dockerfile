FROM node:26-alpine

WORKDIR /app
ADD main.js package*.json /app/
RUN npm ci

EXPOSE 8080
CMD ["node", "main.js"]
