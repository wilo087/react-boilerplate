FROM node:lts-alpine as build-stage
LABEL MAINTAINER Wilowayne De La Cruz <wilo0087@gmail.com>

WORKDIR /app

COPY package*.json .
COPY yarn.lock .

RUN npm install -g yarn
RUN yarn install

# Add jest global
RUN yarn global add jest nodemon

COPY . .
RUN yarn buildprod


# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/public /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
