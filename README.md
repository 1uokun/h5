# 基于HTML5造了一些轮子，库名暂定为ddH5 
 - 使用文档
 - [基于Scroll组件的图片懒加载](https://1uokun.github.io/h5/dist/)
 - [基于Clusterize.js思想的虚拟长列表](https://1uokun.github.io/h5/dist/components/clusterize.html)
 - [基于swiper.js思想的触摸版轮播](https://1uokun.github.io/h5/dist/components/swiper.html)
 - [脏值检测简单应用 - 表单提交](https://1uokun.github.io/h5/dist/components/dirty-checking.html)

## 面向开发者
本代码库使用`webpack`打包工具，将各个组件打包并压缩在一个命名为`dingdingH5.js`的文件中，并以`ddH5`为`library`名暴露给用户。
在实际开发中，利用`webpack-dev-server`搭建本地测试服务器用于快速开发测试，具体操作如下：
```
// 环境配置
npm install webpack webpack-cli webpack-dev-server -g 

// node_modules
npm install

// 测试开发 - localhost:9000
npm start

// 打包
npm run build
```

## todo-list
基础类库
 - [ ] [Scroll](https://github.com/1uokun/h5/blob/master/src/base/scroll.js)
 - [ ] Touch
 - [ ] PageLife
 - [ ] [Util](https://github.com/1uokun/h5/blob/master/src/base/util.js)
 
组件
 - [ ] FlatList
 - [ ] [Clusterize](https://github.com/1uokun/h5/blob/master/src/components/clusterize.js)
 - [ ] [Swiper](https://github.com/1uokun/h5/blob/master/src/components/swiper.js)
 - [ ] [Dirty-Checking](https://github.com/1uokun/h5/blob/master/src/components/dirtycheck.js)
 - [ ] PullRefresh
    - [参考](http://www.alloyteam.com/author/tat-tennylv/)
    
## 作者目的
在日新月异的前端框架更新浪潮中，每天花的最多的时间就是不停的学习新的框架，新的设计模式，将记忆力全部用到了记住那些别人的api中。
我想我应该要重新学习真正的JavaScript语言了，把Ayanami还给我！

2018/09/05：小而美的类库能让技术人员即时地跟进技术潮流。😁