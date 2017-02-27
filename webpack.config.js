var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,

  entry: {
    lesson1: './lesson1/index.js',
  },

  output: {
    path: path.resolve('./bundles'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // As long as the vendor module exists and is used once, include it.
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
