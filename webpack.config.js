const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(`${__dirname}/src/js`, 'index.js'),
  output: {
    path: path.resolve(`${__dirname}`, 'dist'),
    filename: 'main.js'
  },
  mode: 'development',
  module: {
    rules: []
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/html/index.html',
      filename: 'index.html',
      chunk: ['main'],
      inject: true
    })
  ]
};

