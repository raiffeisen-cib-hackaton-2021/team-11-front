FROM node:latest

COPY . /src
WORKDIR /src

RUN npm install
RUN npm run build

EXPOSE 3000
#CMD ["npx", "serve", "-s", "build", "-l", "3000"]
CMD node src/server.js
