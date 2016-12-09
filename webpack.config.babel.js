var cssModulesIdentName = '[name]--[local]--[hash:base64:5]';

if (process.env.NODE_ENV === 'production') {
  cssModulesIdentName = '[hash:base64:5]';
}

// webpack.config.js css-modules loader example
module.exports = {
  output: {
    // YOU NEED TO SET libraryTarget: 'commonjs2'
    libraryTarget: 'commonjs2',
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=' + cssModulesIdentName,
          'sass',
          'postcss-loader',
        ],
      },
    ],
  },
};
