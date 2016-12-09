var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/src/client/index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: '/',
    filename: "application.js"
  },

  resolve: {
    root: [
      __dirname + "/src/common",
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
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]!sass'
      },

      {
        test: /\.(jpg|png|svg)$/,
        exclude: /images\/svg/,
        loader: 'url?limit=8192'
      }

    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
}
