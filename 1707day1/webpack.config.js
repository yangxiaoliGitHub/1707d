const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //抽离css
const HtmlWebapckPlugin = require("html-webpack-plugin"); //注入到html中
const {CleanWebpackPlugin} = require("clean-webpack-plugin"); //自动清空打包文件的
module.exports = {
  mode:"development", //开发模式   production 生产模式
  entry:path.join(__dirname,"src/index.js"),//配置入口文件
  devtool:"source-map",
  output:{ //出口
    filename:"[name][hash].js",  //打包的文件名
    path:path.join(__dirname,"build")  //打包的文件路径
  },
  module:{ //解析规则
    rules:[
      {
        test:/\.(sc|c|sa)ss$/,
        // use:["style-loader","css-loader","sass-loader"] //注入通过style  到html中
        use:[
          MiniCssExtractPlugin.loader,{
          loader:"css-loader",
          options:{
            sourceMap:true  //追踪到源目录
          }
        },{
          loader:"sass-loader",
          options:{
            sourceMap:true  //追踪到源目录
          }
        }] //注入通过style  到html中
      },
      {
        test:/\.js$/,
        rules:[{
          loader:"babel-loader",
          options:{
            presets:["@babel/preset-env"]
          }
        }]
      },{
        test:/\.(woff|ttf|eot|otf)$/,
        // loader:"file-loader"
        use:[
          {
            loader:"url-loader",
            options:{
              limit:2000
            }
          }
        ]
      },{
        test:/\.(png|jpg|gif|svg)$/,
        // loader:"file-loader"
        use:[
          {
            loader:"url-loader",
            options:{
              limit:2000
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({//抽离css
      filename:"[name]-[hash].css",
    }),
    new HtmlWebapckPlugin({ //打包到build 目录 之后 自动注入html
      title:"hhh",
      filename:"index.html",
      template:path.join(__dirname,"index.html"),
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    port:8888,
    hot:true,
    before:(app)=>{
      app.get("/get",(req,res)=>{
        console.log(req.query);
        res.send({type:"get"})
      })
      app.post("/post",(req,res)=>{
        console.log(req);
        res.send({type:"post"})
      })
    }
  },
  resolve:{
    //配置别名
    alias:{
      "@":path.join(__dirname,"src"),
    },
    //配置后缀
    extensions:[".scss",".js",".css"]
  }
}