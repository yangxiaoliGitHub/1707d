const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//插件  抽离css
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const webpack = require("webpack");
let listData = require("./mock/data")
module.exports = {
  mode:"development",
  entry:"./src/index.js",
  devtool:"source-map",//js map 映射
  output:{
    filename:"build[hash].js",
    path:path.resolve("build")
  },
  module:{
    rules:[
      //sass css
      {
        test:/\.(c|sa|sc)ss$/,
        include:path.join(__dirname,"src"),  //只查找 src目录
        // use:["style-loader","css-loader","sass-loader"],//  node-sass
        use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"],//  node-sass
      },
      // js
      {
        test:/\.js$/,
        // loader:"babel-loader"
        exclude:/node_modules/,  //除了node_modules文件夹
        use:[{
          loader:"babel-loader",
          options:{
            presets:["@babel/preset-env"]
          }
        }]
      },
      // 图片
      {
        test:/\.(png|gif|jpg|jpeg)$/,
        loader:"file-loader"
      },
      {
        test:/\.(ttf|woff|svg)$/,
        use:[
          {
            loader:"url-loader",
            options:{
              limit:1000
            }
          }
        ]
      },
      // //html
      // {
      //   test:/\.html$/,
      //   loader:"html-loader"
      // },
      // //vue
      // {
      //   test:/\.vue$/,
      //   loader:"vue-loader"
      // },
    ]
  },
  devServer:{
    port:8888,
    hot:true, //热替换
    open:true,
    before(app){
      app.get("/getList",(req,res)=>{
        let i = req.query.i;
        res.send(listData[i])
      })
    }
  },
  resolve:{
    extensions: [".js", ".json",".css",".scss",".vue"],
    alias: {
      "@":"./css/"
    }
  },
  plugins:[
    //抽离css
    new MiniCssExtractPlugin({
      filename:"./index-[hash].css"
    }),
    //自动打包注入到html
    new HtmlWebpackPlugin({
      template:"./index.html",  //开发目录文件
      filename:"index.html" , // 打包目录文件
      inject:"head"  //打包 js注入的位置
    }),
    new webpack.HotModuleReplacementPlugin(),  //热替换
    //清空dist
    new CleanWebpackPlugin()
  ]

}