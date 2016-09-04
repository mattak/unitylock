var path    = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheat-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    './app/index.js'
  ],

  output: {
    path:       path.join(__dirname, 'public/static'),
    filename:   'bundle.js',
    publicPath: '/static/'
  },

  devServer: {
    contentBase: 'public/static',
    port: 3000
  },
  
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
