# webpack
# webpack的使用

# nodejs  模块规范 遵循commonjs规范  后台
- 导入  require
- 导出  exports = module.exports    

# es6 模块规范  前端
- 导入 import
- 导出 export   默认是对象
      export default  默认导出

- 在一个模块中 只能有一个唯一的  默认导出

# webpack四大标志关键字

入口 entry
出口 output
模块规则  module:{rules:[]}
插件  plugins:[]

# 结构目录
- src  静态资源文件  移动开发学的  es6
- webpack.config.js  后台文件  commomjs

# 抽离css文件 webpack4.0之后 用这个插件 mini-css-extract-plugin  抽离css



# 课堂回顾
- 用到了哪些包
 首先咱们要使用webpack   安装  webpack webpack-cli
 创建一个文件  webpack.config.js  文件 
      - entry
      - output
      - module
      - plugins
自动解析 js/jsx文件
遇到 css/sass/img   用loader
css   =>css-loader   style-loader   
sass   => sass-loader  node-sass
css抽离   =>mini-css-extract-plugin   new MiniCssExtractPlugin({[hash].css})
自动注入到html中的插件   => html-webpack-plugin   
            new MiniCssExtractPlugin({template:"src/index.html"})


# 
1 css  /sass  导入
2 css抽离
3 hash 随机变量
3 自动注入到html中