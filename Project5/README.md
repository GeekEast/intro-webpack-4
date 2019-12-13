<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [React JSX解析](#react-jsx%E8%A7%A3%E6%9E%90)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

#### React JSX解析
- **Install Package** `yarn add --dev react react-dom @babel/{core,preset-env,preset-react} babel-loader`
- **Config Webpac**
```javascript
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}
```
- **Config** `.babelrc`
```javascript
{
  "presets": [ "@babel/preset-env","@babel/preset-react" ], // 一些列预设的plugins的集合
  "plugins": [ "@babel/proposal-class-properties" ]  // 新增的单独的plugin
}
```