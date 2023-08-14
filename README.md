# Nginx Proxy Example
This repository contains nextjs, nestjs and laravel applications which are proxyed using nginx (docker based).

This app using main file and you can read or modify it. The file is:
1. `api/Dockerfile`
2. `cms/Dockerfile`
3. `web/Dockerfile`

The Dockerfile above is used to build production apps

1. `nginx.conf`

With this file I custom nginx configuration to proxy app according to the port I want 

1. `docker-compose.yml`

I use this file to combine all apps (docker apps) with single build command. More information
You can read here https://docs.docker.com/compose