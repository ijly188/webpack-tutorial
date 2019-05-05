const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.[contenthash].js',
    chunkFilename: '[name].shared.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer')({
                    'browsers': ['> 1%', 'last 2 versions']
                  }),
                ]
              }
            },
            "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'myPrefix.[name].[ext]',
              publicPath: '../images',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },  
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.[contenthash].css',
    })
  ]
})