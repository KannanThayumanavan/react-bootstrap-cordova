const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const buildPath = path.resolve(__dirname, 'www');

const config = {
  entry: './index.js',
  // Render source-map file for final build
  //devtool: 'source-map',
  // output config
  output: {
    path: buildPath, // Path of output file
    filename: 'bundle.js', // Name of output file
  },
  plugins: [
    // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
    }),

    new webpack.NoErrorsPlugin(),

    new TransferWebpackPlugin([
      {from: 'www',to: '/'},
    ]),

    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    })
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
    ],
  },
};

module.exports = config;
