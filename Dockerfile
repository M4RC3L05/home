FROM lipanski/docker-static-website:latest

COPY ./public .

VOLUME [ "/home/static/data" ]
