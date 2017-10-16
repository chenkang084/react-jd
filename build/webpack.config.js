const webpack = require("webpack"),
  path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  rootPath = path.resolve(__dirname, "../");

module.exports = {
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
          {
            loader:
              "css-loader?modules&sourceMap&importLoaders=1&localIdentName=[hash:base64:5]"
          },
          "less-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader:
              "css-loader?modules&sourceMap&importLoaders=1&localIdentName=[hash:base64:5]"
          }
        ]
      },
      { test: /\.(png|jpg|jpeg)$/, use: ["url-loader"] },
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
                  libraryName: "antd",
                  style: true // or 'css'
                }
              ]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".scss", ".less", "jsonp"],
    alias: { moment$: "moment/moment.js" }
  },
  devServer: {
    inline: true,
    hot: true,
    port: 8000,
    host: "0.0.0.0",
    contentBase: rootPath + "/src/public" // static files path
    // publicPath: "/assets/"  //set bundle.js path
    // host:'192.168.199.237'
  }
};
