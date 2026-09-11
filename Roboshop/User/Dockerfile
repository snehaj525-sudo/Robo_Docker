FROM node:20
WORKDIR /app
EXPOSE 8080
COPY *.js .
COPY package*.json .
RUN npm install
ENV Mongo="true" \
    REDIS_URL="redis://redis:6379" \
    MONGO_URL="mongodb://mongodb:27017/users"
CMD ["node" , "server.js"]
