#!/bin/bash

# Install dependencies
yarn install

# Avoid a sass build bug
npm rebuild node-sass

# Build js and sass scripts  
yarn run buildprod

# Run the server
yarn start

/bin/bash