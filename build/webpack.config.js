const webpack = require("webpack"),
  path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  rootPath = path.resolve(__dirname, "../"),
  pxtorem = require("postcss-pxtorem");

const webpackConfig = {
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: rootPath + "/src/index.html"
    })
  ],
  entry: {
    main: path.resolve(rootPath, "./src/index.js")
  },
  output: {
    path: path.resolve(rootPath, "/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpg|jpeg)$/, use: ["url-loader"] },

      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: [
          require.resolve("antd-mobile").replace(/warn\.js$/, "") // antd-mobile 内置svg
          //path.resolve(__dirname, 'src/my-project-svg-foler'),  // 业务代码本地私有 svg 存放目录
        ]
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react"],
            plugins: [
              [
                "import",
                {
                  libraryName: "antd-mobile",
                  style: "css" // or 'css'
                  // style: true // or 'css'
                }
              ]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [
      ".web.tsx",
      ".web.ts",
      ".web.jsx",
      ".web.js",
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".json"
    ],
    // modules: ["src", "node_modules", path.resolve(rootPath, "./node_modules")],
    alias: { moment$: "moment/moment.js" }
  },
  devServer: {
    inline: true,
    hot: true,
    port: 9000,
    host: "0.0.0.0",
    disableHostCheck: true,
    contentBase: rootPath + "/src/public" // static files path
    // publicPath: "/assets/"  //set the path of bundle.js
  }
};

// webpackConfig.postcss.push(pxtorem({
//   rootValue: 100,
//   propWhiteList: [],
// }));

module.exports = webpackConfig;
