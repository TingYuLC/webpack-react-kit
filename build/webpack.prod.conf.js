const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 10 // 优先级
        },
        common: {
          name: "common",
          test: /[\\/]src[\\/]/,
          minSize: 1024,
          minChunks: 2,
          chunks: "all",
          priority: 5
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
},
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash].css",
      chunkFilename: "static/css/[name].[contenthash].css"
    })
  ]
});