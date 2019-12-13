<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [入口出口](#%E5%85%A5%E5%8F%A3%E5%87%BA%E5%8F%A3)
  - [entry](#entry)
  - [output](#output)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 入口出口

### entry
> 打包入口文件 **(>= 1)**
- 单页应用
```javascript
module.exports = {
  entry: <path>
}
```
- 多页应用
```javascript
module.exports = {
  entry: {
    app1: <path1>,
    app2: <path2>
  }
}
```

### output
> 输出路径 **(>=1)**
```javascript
module.exports = {
  entry: {
    app1: <path1>,
    app2: <path2> 
  },
  output: {
    filename: '[name].js', // 源文件名
    path: __dirname + './dist'
  }
}
```