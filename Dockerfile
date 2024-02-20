FROM ohdsi/atlas:2.14.0
COPY --chown=101 ./config-local.js /usr/share/nginx/html/atlas/js/config-local.js
