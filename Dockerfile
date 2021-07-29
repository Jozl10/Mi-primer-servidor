FROM node 
MAINTAINER Jesus Zambrano 
ENV HOME /root
COPY . /app
EXPOSE 5000
CMD cd /app;node servidorSincrono.js