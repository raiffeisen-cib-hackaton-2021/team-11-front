FROM node:14

COPY . /src
WORKDIR /src

RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "npm", "-v" ]
CMD [ "npx", "serve", "-s", 'build', '-l', '3000' ]
