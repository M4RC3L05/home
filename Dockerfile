FROM docker.io/joseluisq/static-web-server:2.35.0-alpine

COPY ./public /public

VOLUME [ "/public/data" ]
