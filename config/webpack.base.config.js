const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = (env) => {
  const { PLATFORM, VERSION } = env;

  return merge([
    {
      entry: [APP_DIR],
      mode: PLATFORM,
      output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../public/'),
        hotUpdateChunkFilename: '_hot_/hot-update.js',
        hotUpdateMainFilename: '_hot_/hot-update.json',
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
          hash: true,
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(VERSION),
          'process.env.PLATFORM': JSON.stringify(PLATFORM),
        }),
        new CopyWebpackPlugin([{ from: 'src/static' }]),
        new BrowserSyncPlugin({
          // browse to http://localhost:3000/ during development,
          // ./public directory is being served
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['public'] },
        }),
      ],
      devtool: 'source-map',
      watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 400,
      },
    },
  ]);
};
