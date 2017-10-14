"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  webpack = require("webpack"),
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  path = require("path"),
  rootPath = path.resolve(__dirname, "../");

const svgDirs = [
  require.resolve("antd-mobile").replace(/warn\.js$/, ""), // 1. 属于 antd-mobile 内置 svg 文件
  path.resolve(rootPath, "./src/images") // 2. 自己私人的 svg 存放目录
];

module.exports = {
  entry: {
    vendor: ["react", "react-dom", "antd-mobile"]
  },
  output: {
    path: rootPath + "/src/library", //打包后的文件存放的地方
    filename: "vendor.dll.js", //打包后输出文件的文件名
    library: "vendor"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: [path.resolve(__dirname, "./node_modules/*")]
      },
      {
        test: /\.(png|jpg)$/,
        use: "url-loader?limit=8192&name=src/images/[name].[ext]"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "sass-loader"]
        })
      },
      {
        test: /\.(svg)$/i,
        use: "svg-sprite-loader",
        include: svgDirs // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("main.css"),
    new CleanWebpackPlugin([rootPath + "/src/library/*"]),
    new webpack.DllPlugin({
      path: path.resolve(rootPath, "./src/library/[name]-manifest.json"),
      name: "[name]"
    })
  ],
  resolve: {
    modules: ["node_modules", path.join(rootPath, "./node_modules")],
    extensions: [".web.js", ".js", ".json"]
  }
};
