/* eslint-disable */
const merge = require('webpack-merge');

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

// Dev Config
const baseConfig = require('./webpack.base.config');

const prodConfiguration = env => merge([
  {
    optimization: {
      // runtimeChunk: 'single',
      // splitChunks: {
      //   cacheGroups: {
      //     vendor: {
      //       test: /[\\/]node_modules[\\/]/,
      //       name: 'vendors',
      //       chunks: 'all'
      //     }
      //   }
      // },
      minimizer: [new UglifyJsPlugin({
        sourceMap: true,
      })],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new OptimizeCssAssetsPlugin(),
      new Visualizer({ filename: './statistics.html' }),
    ],
  },
]);

module.exports = env => merge(baseConfig(env), prodConfiguration(env));
