/**
 * @author Wilowayne De La Cruz <wilo0087@gmail.com>
 * @desc Webpack module bundler for this project
 */

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './public/js'),
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 400,
  },
};
