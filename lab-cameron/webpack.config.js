'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const plugins = [
  new HTMLPlugin({
    template: `${__dirname}/app/index.html`,
  }),
  new ExtractTextPlugin('bundle-[hash].css'),
];

module.exports = {
  devtool: 'source-map',
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle-[hash].js',
    path: `${__dirname}/build`,
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(eot|woff|ttf|svg).*/,
        use: 'url?limit=100000&name=font/[hash].[ext]',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [`${__dirname}/app/scss/`],
              },
            },
          ],
        }),
      },
    ],
  },
};
