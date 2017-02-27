const path = require('path');
const webpack = require('webpack');
const buildPath = path.resolve(__dirname, 'build');
var curre = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  devServer: {
    contentBase: 'www', // Relative directory for base of server
    devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: 3333, // Port Number
    host: '0.0.0.0', // Change to '0.0.0.0' for external facing server
  },
  devtool: 'source-map',
  output: {
    path: buildPath, // Path of output file
    filename: 'bundle.js',
  },

  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin()


  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        includes: [path.join(__dirname, '')],
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        },
        excludes:  /(node_modules|plugins|platforms|hooks|node_server)/
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: "json",
        include: path.resolve(__dirname, 'src')
      }
    ]
  }
};
