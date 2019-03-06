FROM node:10
# MAINTAINER Wilowayne De La Cruz <wdelacruz@viva.com.do>

WORKDIR /app
COPY . /app
EXPOSE 3000

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN $HOME/.yarn/bin/yarn install

# RUN yarn global add forever

# Install dependencies
RUN yarn install

# ADD setup.sh /app
RUN ["chmod", "+x", "/app/setup.sh"]

# Avoid CRLF windows bug
RUN sed -i -e 's/\r$//' /app/setup.sh
ENTRYPOINT ["/app/setup.sh"]
