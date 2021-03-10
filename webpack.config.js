'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: "./src/js/script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  watch: true,
  devtool: "source-map",

  plugins: [
    new MiniCssExtractPlugin({filename: 'main.css'})
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
}