FROM node:lts-alpine AS development
LABEL MAINTAINER Wilowayne De La Cruz <wilo0087@gmail.com>

WORKDIR /app

ARG NODE_ENV

COPY package*.json .
COPY yarn.lock .

RUN npm install -g yarn
# RUN yarn install

# Add jest global
RUN yarn global add jest nodemon

COPY . .
RUN yarn $NODE_ENV
EXPOSE 3000
RUN ["chmod", "+x", "/app/setup.sh"]

# Avoid CRLF windows bug
RUN sed -i -e 's/\r$//' /app/setup.sh
ENTRYPOINT ["/app/setup.sh"]


# production stage
FROM nginx:stable-alpine AS production
COPY --from=development /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
