<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [初始化](#%E5%88%9D%E5%A7%8B%E5%8C%96)
  - [安装webpack](#%E5%AE%89%E8%A3%85webpack)
  - [webpack配置](#webpack%E9%85%8D%E7%BD%AE)
  - [问题](#%E9%97%AE%E9%A2%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 初始化
### 安装webpack
- **安装**`webpack`: `yarn add --dev webpack webpack-cli`
- **配置**: `touch webpack.config.js`
- **添加**: `"bundle": "webpack"`
- **运行**: `yarn bundle`

### webpack配置
- 默认配置 (即便不写配置文件)
```javascript
module.exports = {
  entry: './src/index.js', // 入口文件
  output: './dist/main.js', // 输出文件
  // mode默认为production
};
```
- 自定配置
```javascript
module.exports = {
  entry: './src/index.js', // 入口文件
  output: './dist/main.js', // 输出文件
  mode: 'production', // 环境模式
  module: {           // loaders
    rules: [
      {test: /\.text$/, use: 'raw-loader'}
    ]
  },
  plugins: [          // plugins
    new HtmlwebpackPlugin({
      template: './src/index.html'
    })
  ]
};
```

### 问题
- `HTML`在哪里建立? - `dist`里面
