#!/bin/bash

# Install dependencies
yarn install

# Avoid a sass build bug
npm rebuild node-sass

# Build js and sass scripts  
yarn run buildprod

# Run the server
yarn start

cat << "EOF"
_____   ____  _   _ ______ _ 
|  __ \ / __ \| \ | |  ____| |
| |  | | |  | |  \| | |__  | |
| |  | | |  | | . ` |  __| | |
| |__| | |__| | |\  | |____|_|
|_____/ \____/|_| \_|______(_)"
EOF

/bin/bash