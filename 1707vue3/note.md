# vue
# vue使用方式
- cdn 引入   https://cdn.jsdelivr.net/npm/vue/dist/vue.js
- npm 本地包的方式引入
 npm init -y
 npm i vue

# vue 基础指令  tab切换
- 基础指令 directive   元素的行间属性 
  - mustache 小胡子语法  {{变量/赋值/表达式/三元运算}}
  - v-text
  - v-html
  - v-model 和表单元素

  - v-if  v-else-if  v-else      第一次显示隐藏  利用if else
  - v-show    频繁操作dom  
  - v-for
  - v-once  只渲染一次
  - v-on:click = ""   @click=""  绑定事件
  - v-bind:href=" "   :href=""    动态属性

#  v-model 结合表单 input    全选反选
  - text 
  - radio  单选  男 女
  - checkbox  一个多选框 同意   多选  全选反选 兴趣爱好  
  - select  下拉菜单 多选


# v-bind
:class 
  - 变量 
  - {active:键值(变量|true|false)}     class="active"
  - [box1,box2]    通过索引获取某一个值
:style
  - 变量 
  - {active:键值(变量|true|false)}     class="active"
  - [box1,box2]    通过索引获取某一个值

# computed  计算属性
- total()   页面刷新  立马执行(不管计算数据变不变)
- total   页面刷新  (先查看 计算数据变不变 不变 就不更新了 走缓存) 
- 多个变化的量
单价 * 数量   = 总价

# 管道符 filters  


# 组件 component
- 定义组件
- 注册组件
- 使用组件

- vue-cli
- 组件化

