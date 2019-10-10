const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const bp = require("body-parser");

module.exports = {
  mode:"development",  //production 生产环境
  entry:{
    b:"./src/index.js" ,  //第一个入口文件
    a:'./src/app.js'  //第二个入口文件
  },
  output:{
    filename:"[name].js",  //name是一个变量 存储的是入口文件的键名
    path:path.resolve("dist")
  }
  
}
