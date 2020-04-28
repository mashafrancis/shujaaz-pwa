const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const path = require('path');
const {
  hotModuleReplacementPlugin
} = require('./webpack.plugins');

module.exports = merge(config, {
  output: {
    filename: '[name].js'
  },
  optimization: {
    namedModules: true,
  },
  devServer: {
    historyApiFallback: true,
    compress:true,   //Good practice to add this to compress the files while sending.
    contentBase: '../',
    // contentBase: path.resolve(__dirname, '../src/assets'),
    publicPath: 'http://superheroes.com:3000/',
    hot: true,
    overlay: true,
    port: 3000,
    host: 'localhost',
    open: true,
    watchContentBase: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    }
  },
  plugins: [hotModuleReplacementPlugin]
});
