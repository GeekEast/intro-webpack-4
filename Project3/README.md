<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [基本概念](#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)
  - [Loaders](#loaders)
    - [常用](#%E5%B8%B8%E7%94%A8)
    - [用法](#%E7%94%A8%E6%B3%95)
  - [Plugins](#plugins)
    - [常用](#%E5%B8%B8%E7%94%A8-1)
    - [用法](#%E7%94%A8%E6%B3%95-1)
  - [Mode](#mode)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 基本概念
### Loaders
- webpack默认支持`JavaScript`和`JSON`文件
- Loaders能够提供`其他文件解析`的支持, 解析源文件，返回转换结果
#### 常用
| Name          | Description                 |
| ------------- | --------------------------- |
| `babel-loader`  | 转换es6,es7等新语法         |
| `css-loader`    | .css文件加载和解析          |
| `less-loader`   | less -> css                 |
| `ts-loader`     | ts -> js                    |
| `file-loader`   | 图片、字体打包              |
| `raw-loader `   | 将文件以字符串的形式导入    |
| `thread-loader` | 多进程打包js和css, 加快速度 |

#### 用法
```javascript
const path = require('path');
module.exports = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.txt$/,   // 匹配规则
        use: 'raw-loader' // Loader
      }
    ]
  }
}
```

### Plugins
- 用于**增强**webpack，进行bundle的`优化`、资源管理和环境变量注入
- 作用域`整个构建流程`

#### 常用

| Name                     | Description                                |
| ------------------------ | ------------------------------------------ |
| CommonsChunkPlugin       | chunk相同的代码提取成公共js                |
| CleanWebpackPlugin       | 清除构建目录                               |
| ExtractTextWebpackPlugin | 将css从bundle文件里提取成一个独立的css文件 |
| CopyWebpackPlugin        | **将文件或者文件夹拷贝到构建的输出目录**   |
| HtmlWebpackPlugin        | **创建html文件去承载输出的bundle**         |
| UglifyWebpackPlugin      | 压缩JS                                     |
| ZipWebpackPlugin         | 将打包出的资源生成一个zip包                |
| ExtractTextWebpackPlugin | 将css从bundle文件里提取成一个独立的css文件 |

#### 用法
```javascript
const path = require('path');
module.exports = {
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      tempalte: './src/index.html'
    })
  ]
}
```
### Mode
- 指定NODE_ENV为`production`, `development`还是 `none`
- 就像一个切换开关，控制一些`plugins`在不同环境下的**开关**
  
| 选项        | 描述                                                                                                                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| development | NODE_ENV=development;turn on `NamedChunksPlugin` and `NameModulesPlugin`                                                                                                                                    |
| production  | NODE_ENV=production; turn on `FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`, `ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin`, `OccurrenceOrderPlugin`, `SideEffectsFlagPlugin`, `TerserPlugin` |
| none        | 不开启任何plugin                                                                                                                                                                                            |

