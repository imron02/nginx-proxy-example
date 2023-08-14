FROM php:8.2-apache AS base

FROM base
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
WORKDIR /var/www/html

COPY . .

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions @composer pdo_mysql

RUN npm install && npm run build
RUN composer install --optimize-autoloader --no-dev

RUN chown -R www-data:www-data /var/www/html
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
RUN a2enmod rewrite && /etc/init.d/apache2 restart

USER www-data

EXPOSE 80

