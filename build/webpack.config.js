'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack'),
  _ = require('lodash'),
  env = _.trim(process.env.NODE_ENV),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  path = require('path'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  rootPath = path.resolve(__dirname, '../')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// const svgDirs = [
//   require.resolve("antd-mobile").replace(/warn\.js$/, ""), // 1. 属于 antd-mobile 内置 svg 文件
//   path.resolve(rootPath, "/src/images") // 2. 自己私人的 svg 存放目录
// ]

const webpackConfig = {
  devtool: 'module-source-map',
  entry: {
    app: [rootPath + '/src/index.js']
  },
  output: {
    path: rootPath + '/dist',
    filename: '[name].[chunkhash:8].bundle.js',
    // publicPath: "./public", // 打包时，是否添加前缀
    chunkFilename: '[name]-[id].[chunkhash:8].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: [path.resolve(rootPath, './node_modules/')]
    },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192&name=src/images/[name].[ext]'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: env === 'dev' ? false : true,
              sourceMap: false
            }
          },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            // {
            //   loader:
            //     "css-loader?sourceMap&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader"
            // },
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                minimize: env === 'dev' ? false : true,
                importLoader: 1,
                localIdentName: '[hash:base64:5]'
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        include: [path.resolve(rootPath, './src/components/')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            // {
            //   loader:
            //     "css-loader?modules&sourceMap&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader"
            // },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: false,
                minimize: env === 'dev' ? false : true,
                importLoader: 1,
                localIdentName: '[hash:base64:5]'
              }
            // ?modules&sourceMap&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader"
            },
            'postcss-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        include: [path.resolve(rootPath, './src/styles/')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            // {
            //   loader:
            //     "css-loader?sourceMap&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader"
            // },
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                minimize: env === 'dev' ? false : true,
                importLoader: 1,
                localIdentName: '[hash:base64:5]'
              }
            // ?sourceMap&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader
            },
            'postcss-loader',
            `less-loader`
          ]
        })
      }
    // {
    //   test: /\.(svg)$/i,
    //   use: "svg-sprite-loader",
    //   include: svgDirs // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
    // }
    ]
  },
  devServer: {
    contentBase: rootPath + '/src/public/', // 本地服务器所加载的页面所在的目录
    host: '0.0.0.0',
    port: 9000,
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    proxy: {
      '/api': {
        target: 'https://cnodejs.org/api/v1',
        secure: false,
        changeOrigin: true,
        host: 'cnodejs.org'
      }
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.css',
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // Specify the common bundle's name.
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [
            require('postcss-pxtorem')({
              rootValue: 100,
              propWhiteList: []
            }),
            require('autoprefixer')
          ]
        }
      }
    }),
    new HtmlWebpackPlugin({
      // 根据模板插入css/js等生成最终HTML
      filename: './index.html', // 生成的html存放路径，相对于 path
      template: rootPath + '/src/index.html', // html模板路径
      hash: true // 为静态资源生成hash值
    }),
    new webpack.DllReferencePlugin({
      context: rootPath,
      name: 'vendor',
      manifest: require(path.resolve(
        rootPath,
        './src/public/library/vendor-manifest.json'
      ))
    }),
    new CopyWebpackPlugin([{
      from: rootPath + '/src/public/',
      to: rootPath + '/dist'
    }]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  resolve: {
    modules: ['node_modules', path.join(rootPath, './node_modules')],
    extensions: ['.web.js', '.js', '.json', '.scss', '.css', '.less']
  }
}

if (env !== 'dev') {
  console.log(
    '=============================start uglify============================='
  )
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new UglifyJsPlugin()
  ])
}

module.exports = webpackConfig
