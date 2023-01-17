const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  //   mode: "production",
  //   mode: "development",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'] // ORDER MATTERS HERE, RUNS RIGHT to LEFT
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Animal Game Main',
      template: './client/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'build')
    },
    compress: true,
    port: 8080, // DEFAULT PORT is 8080
    hot: true,
    proxy: {
      '/animal': 'http://localhost:3000',
      '/user/**': 'http://localhost:3000'
    }
  }
};
