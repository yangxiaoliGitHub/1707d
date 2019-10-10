const path = require("path");
const fs = require("fs");
let listData = require("./mock/list1")  //数据库里的数据
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const bp = require("body-parser");
module.exports = {
  mode:"development",  //production 生产环境
  entry: "./src/index.js", // string  array  object
  devtool:'source-map',// 追踪到源目录
  output: {
    filename: "[name][hash].js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [{
      test: /\.(sc|c|sa)ss$/,
      include:path.resolve("src/css"),
      // loader: 字符串  "sass-loader"
      // use: 数组
      use: [
        // "style-loader", //用style标签 注入
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",  // 解析成css
          options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader",  // 解析sass文件
          options: {
            sourceMap: true
          }
        },
      ]
    },{
      test:/\.(png|jpg|gif|svg|ico)$/,
      // loader:"file-loader"   //解析 背景图  前景图img 不区分图片大小的
      use:[
        {
          loader:"url-loader",  // base64 data-url格式的图片
          options:{
            limit:1000
          }
        }
      ]

    },{
      test:/\.js$/,
      //除了 node—_modules之外的文件
      exclude:/(node_modules)/,
      use:[
        {
          loader:"babel-loader",
          options:{
            "presets": [
              "@babel/preset-env"
            ],
            sourceMap:true
          }
        }
      ]
    }]
  },
  plugins:[
    //抽离css
    new MiniCssExtractPlugin({
      filename:"[name][hash].css",
    }),
    //注入html
    new HtmlWebpackPlugin({
      filename:"index.html",
      template:"./index.html"
    }),
    //清空dist
    new CleanWebpackPlugin(),
    //模块热更新
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    port:8888,
    hot:true,//热更新
    open:true, //自动打开浏览器
    before:(app)=>{
      app.get("/getList",(req,res)=>{
        let {page,limit,i} = req.query;
        // 1  5  slice(0,5)
        // 2  5  slice(5,10)
        let newData = listData[i].cont.slice((page-1)*limit,page*limit);
        let total = Math.ceil(listData[i].cont.length/limit)
        res.send({total,data:newData})
      })

      // 解析post请求的数据  接收post请求的参数
      // app.use(bp.json())
      // app.use(bp.urlencoded())
      // app.post("/post",(req,res)=>{
      //   console.log(req.body)
      //   res.send({type:"post"})
      // })
    }
  },
  resolve:{
    //配置别名
    alias:{
      "@":"./js"
    },
    //配置省略后缀
    extensions:[".js",".scss",".css"]
  }
}
