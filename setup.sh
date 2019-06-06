#!/bin/sh

# Install dependencies
yarn install

# Avoid a sass build bug
npm rebuild node-sass

# Build js and sass scripts  
yarn watch

# Run the server
# yarn start

/bin/sh
