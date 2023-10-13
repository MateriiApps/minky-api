FROM node:alpine3.18

WORKDIR /app
ADD main.js package*.json /app/
RUN npm ci

EXPOSE 47822
CMD ["node", "main.js"]
