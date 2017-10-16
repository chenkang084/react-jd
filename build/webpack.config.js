"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  webpack = require("webpack"),
  _ = require("lodash"),
  env = _.trim(process.env.NODE_ENV),
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  path = require("path"),
  rootPath = path.resolve(__dirname, "../");

const svgDirs = [
  require.resolve("antd-mobile").replace(/warn\.js$/, ""), // 1. 属于 antd-mobile 内置 svg 文件
  path.resolve(rootPath, "/src/images") // 2. 自己私人的 svg 存放目录
];

module.exports = {
  devtool: "module-source-map",
  entry: {
    app: [
      rootPath + "/src/index.js" //唯一入口文件
    ]
  },
  output: {
    path: rootPath + "/dist", //打包后的文件存放的地方
    filename: "[name].[chunkhash:8].bundle.js", //打包后输出文件的文件名
    // publicPath:rootPath+'/public',
    chunkFilename: "[name]-[id].[chunkhash:8].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: [path.resolve(rootPath, "./node_modules/")]
        // exclude:
        //   env === "dev" ? / / : /node_modules\/(?!(webpack-dev-server)\/).*/
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
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              query: { modules: true, sourceMaps: true }
            },
            "postcss-loader",
            "less-loader"
          ]
        })
      },
      {
        test: /\.(svg)$/i,
        use: "svg-sprite-loader",
        include: svgDirs // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      }
    ]
  },
  devServer: {
    contentBase: rootPath + "/src/public/", //本地服务器所加载的页面所在的目录
    host: "0.0.0.0",
    port: 9000,
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    proxy: {
      "/api": {
        target: "https://cnodejs.org/api/v1",
        secure: false,
        changeOrigin: true,
        host: "cnodejs.org"
      }
    }
  },
  plugins: [
    new ExtractTextPlugin("main.css"),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common" // Specify the common bundle's name.
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function() {
          return [
            require("postcss-pxtorem")({
              rootValue: 100,
              propWhiteList: []
            }),
            require("autoprefixer")
          ];
        }
      }
    }),
    new HtmlWebpackPlugin({
      //根据模板插入css/js等生成最终HTML
      filename: "./index.html", //生成的html存放路径，相对于 path
      template: rootPath + "/src/index.html", //html模板路径
      hash: true //为静态资源生成hash值
    }),
    new webpack.DllReferencePlugin({
      context: rootPath,
      name: "vendor",
      manifest: require(path.resolve(
        rootPath,
        "./src/public/library/vendor-manifest.json"
      ))
    })
  ],
  resolve: {
    modules: ["node_modules", path.join(rootPath, "./node_modules")],
    extensions: [".web.js", ".js", ".json", ".scss", ".css", ".less"]
  }
};
