FROM node:20
WORKDIR /app
COPY *.js .
COPY package*.json .
RUN npm install
ENV Mongo="true" \
    MONGO_URL="mongodb://mongodb:27017/catalogue"
CMD ["node" , "server.js"]
