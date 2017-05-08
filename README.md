# webpack.config.js es5=>es6
# 使用vue template bug问题

## 目录结构
```
+src    源代码目录
+dist   发布代码生成目录
```

## 注意事项
* JS统一使用ES6语法
* 第三方库，例如zepto、vue等需要配置在package.json和webpack打包中，在打包时自动引入

## 第三方库参考文档
* webpack https://webpack.js.org/
* VUE http://vuejs.org/v2/guide/
* vue-router http://router.vuejs.org/zh-cn/

## 依赖安装
* 安装node
* 安装全局的npm
* 安装工程依赖
```
cd path/to/project
npm install
```

## 打包

webpack
```
