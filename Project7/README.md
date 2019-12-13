<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [解析url](#%E8%A7%A3%E6%9E%90url)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 解析url
- `url-loader`可以设置**较小资源**自动`base64`
- `url-loader`内部依然用到了`file-loader`
- **安装**: `yarn add --dev url-loader`
- **配置webpack**
```javascript
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'bundle.js'
  },
  mode: "production",
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
            limit: 10240  //小于10kb的文件自动base64 
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240  //小于10kb的文件自动base64 
          }
        }]
      }
    ]
  }
}
```