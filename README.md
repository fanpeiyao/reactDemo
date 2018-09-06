# reactDemo

> A React project

## 项目构建

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run start

# 打包部署
npm run bulid
```

## 项目结构

``` bash
reactDemo

|-----build                              //构建相关
|-----config                             //配置相关
|     |------index.js
|-----src
|     |------assets
|     |      |------css                  //css文件
|     |      |------iconfont             //图标
|     |------components                  //页面组件
|     |      |------***.jsx
|     |------router                      //路由
|     |      |------index.js             //路由配置
|     |------views                       //views界面
|     |      |------home.jsx             //首页
|     |------App.vue                     //入口页面
|     |------index.js                    //入口 加载组件 初始化等
|     |------registerServiceWorker.js    //缓存资源到本地，提升应用的访问速度(生产)
|-----static                             //静态资源
|     |------image
|-----public                             //静态资源
|     |------index.html                  //html模板，加载静态资源
|-----package.json                       //package.json
```
