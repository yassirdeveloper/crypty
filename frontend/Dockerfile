FROM node:lts as builder
ARG REACT_PORT

WORKDIR .

COPY package.json .

RUN npm install

COPY . .

EXPOSE $REACT_PORT

CMD ["npm", "start"]