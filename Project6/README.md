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
<div style="text-align:center; margin:auto"><img src="img/2019-12-13-18-44-49.png"></div>


<div style="text-align:center; margin:auto"><img src="img/2019-12-13-18-45-08.png"></div>