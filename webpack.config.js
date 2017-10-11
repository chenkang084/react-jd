var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: __dirname + "/src/index.html"
    })
  ],
  entry: {
    main: path.resolve(__dirname, "./src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.less/, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpg|jpeg)$/, use: ["url-loader"] },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".scss", ".less", "jsonp"]
  },
  devServer: {
    inline: true,
    hot: true,
    port: 8000,
    contentBase: "./src"
    // host:'192.168.199.237'
  }
};
