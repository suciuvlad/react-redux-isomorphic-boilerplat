var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/src/client/index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: '/',
    filename: "[name]-[chunkhash].js"
  },

  resolve: {
    root: [
      __dirname + "/src/javascripts",
      __dirname + "/src/scss",
      __dirname + "/src"
    ],
    extensions: ['', '.js', '.scss']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]', 'sass')
      },

      {
        test: /\.(jpg|png|svg)$/,
        exclude: /images\/svg/,
        loader: 'url?limit=8192'
      }

    ]
  },

  plugins: [
    new ExtractTextPlugin('application.[chunkhash].css', { allChunks: true }),
    new ManifestPlugin({
      basePath: '/',
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
