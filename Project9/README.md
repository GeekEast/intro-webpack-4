<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [文件监听](#%E6%96%87%E4%BB%B6%E7%9B%91%E5%90%AC)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 文件监听
- **目的**: 修改文件后让webpack**自动**build
- **缺陷**: 页面还是需要**手动**刷新的
- **配置**: `webpack.config.js`
```javascript
module.exports = {
  // watch:true, // 开启 options 才有意义
  wathOptions: {
    ignored: /node_modules/, //忽略文件夹
    aggregateTimeout: 300, // 检测到变化300ms后执行
    poll: 1000 // 每秒1000次
  }
}
```
- **开启方法1**: `watch: webpack --watch` in `package.json`, 
- **开启方法2**: `watch:true` in `webpack.config.js`