"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  webpack = require("webpack"),
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  path = require("path");

const svgDirs = [
  require.resolve("antd-mobile").replace(/warn\.js$/, ""), // 1. 属于 antd-mobile 内置 svg 文件
  path.resolve(__dirname, "src/images") // 2. 自己私人的 svg 存放目录
];

module.exports = {
  entry: {
    vendor: ["antd-mobile", "es6-promise", "react", "react-dom"]
  },
  output: {
    path: __dirname + "/src/library", //打包后的文件存放的地方
    filename: "vendor.dll.js", //打包后输出文件的文件名
    library: "vendor"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /(node_modules|bower_components)/
        // include: [
        //   path.resolve(__dirname, "./src"),
        //   path.resolve(__dirname, "./node_modules/webpack-dev-server"),
        //   path.resolve(__dirname, "./node_modules/webpackr")
        // ]
      }
    ]
  },

  plugins: [
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin(["./src/library/*"]),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "./src/library/[name]-manifest.json"),
      name: "[name]"
    })
  ],
  resolve: {
    modules: ["node_modules", path.join(__dirname, "./node_modules")],
    extensions: [".web.js", ".js", ".json"]
  }
};
