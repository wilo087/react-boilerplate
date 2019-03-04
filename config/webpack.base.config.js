// /* eslint-disable */
const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const { PLATFORM, VERSION } = env;

  return merge([
    {
      entry: ['./src/index.js'],
      output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../public/'),
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader', // does is that it looks for .babelrc
            },
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(VERSION),
          'process.env.PLATFORM': JSON.stringify(PLATFORM),
        }),
      ],
      watchOptions: {
        aggregateTimeout: 300,
        poll: 400,
      },
    },
  ]);
};
