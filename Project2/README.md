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