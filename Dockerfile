FROM nginx:1.25-alpine-slim

COPY ./public /usr/share/nginx/html

VOLUME [ "/usr/share/nginx/html/data" ]
