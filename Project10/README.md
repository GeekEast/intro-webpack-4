<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [浏览器自动刷新](#%E6%B5%8F%E8%A7%88%E5%99%A8%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 浏览器自动刷新
- 参数`--open`将会**自动刷新**浏览器
- **优势**: 不输出文件，而是存在**内存**中
- **依赖**: HotModuleReplacementPlugin (自带热更新)
- **安装**: `yarn add --dev webpack-dev-server`
- **配置`webpack`**: 
```javascript
  const webpack = require('webpack');
  // ...
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist', // 输出目录
    hot: true // 开启热更新
  }
```
- **配置`package.json`**: `"dev": "webpack-dev-server --open"`