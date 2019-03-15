# 基于HTML5造了一些轮子，库名暂定为ddH5 
 - 使用文档
 - [基于Scroll组件的图片懒加载](https://1uokun.github.io/h5/dist/)
 - [基于Clusterize.js思想的虚拟长列表](https://1uokun.github.io/h5/dist/components/clusterize.html)
 - 基于react-virtualized思想的虚拟长列表[x]
 - [基于Swiper.js思想的触摸版轮播](https://1uokun.github.io/h5/dist/components/swiper.html)
 - [脏值检测简单应用 - 表单提交](https://1uokun.github.io/h5/dist/components/dirty-checking.html)

## 面向开发者
目前暂不支持古代浏览器

本代码库使用`webpack`打包工具，将各个组件打包并压缩在一个命名为`dingdingH5.js`的文件中，并以`ddH5`为`library`名暴露给用户。
在实际开发中，利用`webpack-dev-server`搭建本地测试服务器用于快速开发测试，具体操作如下：
```
// 环境配置
npm install webpack webpack-cli webpack-dev-server -g 

// node_modules
npm install

// 测试开发 - localhost:9000
npm start
// IP访问
npm start  --host 0.0.0.0

// 打包
npm run build
```

## todo-list
基础类库
 - [x] [Scroll](https://github.com/1uokun/h5/blob/master/src/base/scroll.js)
 - [x] [Touch](https://github.com/1uokun/h5/blob/master/src/base/touch.js)
 - [x] [PageLife](https://github.com/1uokun/h5/blob/master/src/base/pagelife.js)
 - [ ] [Util](https://github.com/1uokun/h5/blob/master/src/base/util.js)
 
组件
 - [ ] FlatList
 - [x] [Clusterize](https://github.com/1uokun/h5/blob/master/src/components/clusterize.js)
 - [ ] [Virtualize](https://github.com/1uokun/h5/blob/master/src/components/virtualize.js)
 - [x] [Swiper](https://github.com/1uokun/h5/blob/master/src/components/swiper.js)
 - [x] [Dirty-Checking](https://github.com/1uokun/h5/blob/master/src/components/dirtycheck.js)
 - [ ] PullRefresh
    - [参考](http://www.alloyteam.com/author/tat-tennylv/)
