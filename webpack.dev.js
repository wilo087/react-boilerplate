const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
  },
  
  watchOptions: {
    aggregateTimeout: 300,
    poll: 400,
  },
};
