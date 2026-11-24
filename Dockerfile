FROM nginx:alpine
COPY k8s/base/index.html /usr/share/nginx/html/index.html
EXPOSE 80