const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  entry: {
    bundleA: './src/index.js',
  },
  output: {
    filename: '[name].bundle.[hash].js',
    chunkFilename: '[name].shared.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '首頁',
      excludeAssets: [/style.*.js/],
      filename: 'index.html',
      template: './index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
}