'use strict'

const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'bundle.js'
  },
  mode: "production",
  watchOptions: {
    ignored: /node_modules/, //忽略文件夹
    aggregateTimeout: 300, // 检测到变化300ms后执行
    poll: 1000 // 每秒1000次
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'] // 顺序很重要
      },
      {
        test: /\.less$/,
        use: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
}