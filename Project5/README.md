<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [解析css](#%E8%A7%A3%E6%9E%90css)
- [解析less](#%E8%A7%A3%E6%9E%90less)
- [配置sass](#%E9%85%8D%E7%BD%AEsass)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 解析css
- **css-loader**: `.css` -> `commonjs对象`
- **style-loader**: `commonjs对象` -> `<style>`
- **前提**: 需要将`css`引入到**任意**`js`文件中去
- **安装**`yarn add --dev style-loader css-loader`
- **配置**
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
        test: /\.css$/,
        use: ['style-loader','css-loader'] //从右向左执行，顺序很重要
      }
    ]
  }
}
```

### 解析less
- **less-loader**: `.less` -> `.css`
- **安装**: `yarn add --dev less less-loader`
- **配置**
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
      }
    ]
  }
}
```

### 配置sass

- **sass-loader**: `.scss` -> `.css`
- **安装**: `yarn add --dev node-sass sass-loader`
- **配置**
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
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  }
}
```