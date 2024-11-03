FROM node:lts as builder
ARG REACT_PORT

WORKDIR ./

COPY . .

RUN npm start

EXPOSE $REACT_PORT