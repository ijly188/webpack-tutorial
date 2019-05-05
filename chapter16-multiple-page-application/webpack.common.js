const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  entry: {
    bundleA: './src/js/index.js',
  },
  output: {
    filename: '[name].bundle.[hash].js',
    chunkFilename: '[name].shared.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              "@babel/plugin-syntax-dynamic-import",
              ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }]
            ]
          }
        }
      },
      { 
        test: /\.pug$/,
        use: ["pug-loader"]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '首頁',
      excludeAssets: [/style.*.js/],
      filename: 'index.html',
      template: './src/index.pug'
    }),
    new HtmlWebpackPlugin({
      title: '關於我們',
      excludeAssets: [/style.*.js/],
      filename: 'about.html',
      template: './src/about.pug'
    }),
    new HtmlWebpackPlugin({
      title: '服務項目',
      excludeAssets: [/style.*.js/],
      filename: 'service.html',
      template: './src/service.pug'
    }),
    new HtmlWebpackPlugin({
      title: '聯絡我們',
      excludeAssets: [/style.*.js/],
      filename: 'contact.html',
      template: './src/contact.pug'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
}