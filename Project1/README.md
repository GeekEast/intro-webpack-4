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
