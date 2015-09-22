var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['jquery', 'underscore', 'fastclick'],
    app: './main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
  ]
};