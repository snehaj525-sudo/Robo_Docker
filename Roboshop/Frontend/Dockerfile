FROM nginx
RUN rm -rf /usr/share/nginx/html/index.html
RUN rm -rf /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/nginx/nginx.conf
COPY index.html /usr/share/nginx/html/index.html
COPY static/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
