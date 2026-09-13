FROM nginx

# Remove default files
RUN rm -rf /usr/share/nginx/html/index.html
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy your frontend files
COPY Static/ /usr/share/nginx/html/

# Copy your custom nginx.conf as the main config
COPY nginx.conf /etc/nginx/nginx.conf

