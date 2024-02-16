FROM node:20-alpine

WORKDIR /app

# copy package.json and package-lock.json to container
COPY package*.json ./

# npm install to get all node modules
RUN npm install

# copy our source code into the container
COPY . .

EXPOSE 3000

# after copying the contents of source code,
# we transpile the TS to JS
# RUN npm run build

# To launch up the container we run npm start which
# uses nodemon to start server and restart on change
CMD npm run dev
