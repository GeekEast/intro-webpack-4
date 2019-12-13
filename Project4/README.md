#### ES6解析
- **Install Package** `yarn add --dev @babel/{core,preset-env} babel-loader`
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
  "presets": [ "@babel/preset-env" ], // 一些列预设的plugins的集合
  "plugins": [ "@babel/proposal-class-properties" ]  // 新增的单独的plugin
}
```