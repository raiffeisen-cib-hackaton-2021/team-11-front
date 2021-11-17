FROM node:14

COPY . /src
COPY . /_fcc
COPY . /package-lock.json
WORKDIR /src

RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "npx", "serve", "-s", 'build', '-l', '3000' ]
