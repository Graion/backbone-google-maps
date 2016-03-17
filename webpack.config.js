var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.html$/, loader: 'mustache' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins : [
    new webpack.ProvidePlugin({
      $ : 'jquery',
      Backbone : 'backbone',
      _ : 'underscore'
    }),
    new ExtractTextPlugin('bundle.css')
  ]
};