const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  //   mode: "production",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"], // ORDER MATTERS HERE, RUNS RIGHT to LEFT
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 8080, // DEFAULT PORT is 8080
    //   hot: true,
    //   // Stopped @ Build Tools challenge: Proxy in Webpack Dev Server
    //   proxy: {
    //     "/api": "http://localhost:3000",
    //   },
  },
};
