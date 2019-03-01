/**
 * @author Wilowayne De La Cruz <wilo0087@gmail.com>
 * @desc Webpack module bundler configuration for production
 */

const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 400,
  },
  // Js Minification configuration
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
};
