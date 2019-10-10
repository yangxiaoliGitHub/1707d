# vue框架  渐进式框架  渐进增强  一点点增强 通过组合完成一个完整的框架 vue全家桶
- vuejs vue router

## 框架和库
- 框架 vue 拥有完整的解决方案  自己 被动
- 库 animate.css  lodash  自己调用 主动

# 特点
- 声明式渲染  forEach  for
- 组件系统
- 客户端路由
- 大规模状态管理 vuex  
- 构建工具 vue-cli

# vue的俩个核心点
- 响应的数据变化
- 组合的视图组件
- 不支持ie8及以下

# MVC 单向
- model 数据
- view 视图
- controller 控制器
# MVVM  双向 (angular,vue)
- model 数据
- view 视图
- viewModel 视图模型

# 感受一下
- hello world
- 安装
  - cdn引入  
  - npm安装

# 指令 v-开头 行间属性  directive
- v-text  文本  解决{{mostache}}闪烁问题
- v-model 表单元素上  实现双向绑定
- v-html  把html当作元素解析 而不是字符串

区别： 把dom直接移除  
- v-if 
- v-else-if
- v-else
区别： 把dom一直存在 显示隐藏  频繁操作dom使用 show
- v-show

- v-for  循环 遍历数组 对象 字符串
- v-bind: 把默认属性变为动态属性
- v-once 只渲染一次  <p v-once>{{num}}</p>
- v-on 事件绑定

 


#
在HTML body部分中的JavaScripts会在页面加载的时候被执行。
在HTML head部分中的JavaScripts会在被调用的时候才执行。（w3c建议放在head标签中）
1. 变量 => 响应式 数据更新 改变页面
2. 声明式渲染 表达式 => className | fn() | a >90 ? '及格' : '不及格'
3. 指令 => 标签上使用 v-xxx  指令里可以使用vue变量
    v-text v-html
    条件判断 
    v-if  v-else-if  v-else => 删除添加元素
    v-show => 改变css样式
    列表渲染
    v-for => Array | Object | String | Number
    表单绑定
    v-model  => 双向绑定

    绑定属性
    v-bind
    v-bind:src="" v-bind:href="href"  
    v-bind:class="{active: 条件}" v-bind:style="[]" 
    简写 :


    绑定事件
    v-on:click scroll
    简写 @


# 渲染数据
- {{data}}
# 指令  元素行间属性  v-开头= "变量"  vue实例data属性
- v-text  渲染数据
- v-model  表单元素
- v-html  识别标签
- v-once 第一次渲染
- v-if v-else-if  v-else  条件判断   dom删除
- v-show  显示隐藏  dom隐藏
- v-for  循环 遍历 数组 对象 字符串
- v-bind:默认属性   :href   动态属性
- v-on:click   === @click  绑定事件

