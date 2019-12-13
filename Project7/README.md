<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [解析图片](#%E8%A7%A3%E6%9E%90%E5%9B%BE%E7%89%87)
- [解析字体](#%E8%A7%A3%E6%9E%90%E5%AD%97%E4%BD%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 解析图片
- **安装** `yarn add --dev file-loader`
- **配置webpack**
```javascript
'use strict'

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
        use: ['file-loader']
      }
    ]
  }
}
```
- **结果**: `f0c3659aac0dd385399473c73723a4ba.png` 实际上是个哈希值

### 解析字体
- **安装** `yarn add --dev file-loader`
- **配置scss**
```scss
@font-face {
  font-family: "OpenFont";
  src: url('./font.ttf') format('truetype');
}

.search-text {
  color: red;
  font-size: 90px;
  font-family: 'OpenFont';
}
``` 
- **配置webpack**
```javascript
'use strict'

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
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
}