# configjs-utilsjs

### 介绍

configjs-utilsjs 是317883224开源的纯js方法库, 包含：时间转换，数字转换金钱格式等。

## 特性

- 纯 js

## 版本
*  [2.1.4]
	+ 修改千分符的方法，从number转string,解决number长度问题
*  [2.1.3]
	+ 修改打包架构，配置按需加载功能
*  [1.1.2]
	+ 修复千分符方法 bug
	+ 修复首字母大写 bug
*  [1.0.9]
	+ formatMoney 方法新增 separators 参数
 
## 安装

```bash
# npm：
npm i configjs-utilsjs -S
```
 
## 快速上手
 
### [推荐]按需加载
```js
// 需要引入的模块
import { formatTimes } from 'configjs-utilsjs';

const time = formatTimes(new Date(), 'yyyy-MM-dd');
console.log(time)
```
 
### 全局引入
```js
// main.js
import Vue from 'vue';
import configjsutilsjs from 'configjs-utilsjs';
Vue.use(configjsutilsjs);

// 在 vue 模块中
const time = this.$configjsutilsjs.formatTimes(new Date(), 'yyyy-MM-dd');
console.log(time)
```

## 文档
 
#### formatMoney（数字格式化为金钱）
##### 属性 attr
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
参数1 | 需要转金钱格式的值 | string number | -- | -- 
参数2 | 金钱保留小数位 | number | -- | -- 
 
 
#### capitalize（首字母大写）
##### 属性 attr
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
参数1 | 首字母大写 | string | -- | -- 
 
 
#### appendScript（body 添加 js 标签）
##### 属性 attr
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
参数1 | 添加的 js 标签链接 | url | -- | -- 
 
 
#### appendLink（body 添加 css 标签）
##### 属性 attr
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
参数1 | 添加的 css 标签链接 | url | -- | -- 
 
 
#### formatTimes（时间转换）
##### 属性 attr
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
参数1 | 时间 | array[data] date | -- | new date 
参数2 | 时间转换类型 | string | 具体写法看详情 | 'yyyy-MM-dd hh:mm:ss' 
 
##### format 详情说明
参数 | 说明 | 范围
:-: | :-: | :-:
y | 年 | 1~4
M | 月 | 1~2
d | 日 | 1~2
h | 小时 | 1~2
m | 分 | 1~2
s | 秒 | 1~2
q | 季度 | 1~2
S | 毫秒 | 1
t | 时间戳 | 1
w | 星期 | 1
 
 
#### generateDateTimes（根据开始结束时间生成连续的时间数组）
##### 属性 attr
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
参数1 | 开始时间 | date | -- | -- 
参数2 | 结束时间 | date | -- | -- 
参数3 | 根据时间中的值来生成数组 | string | y,M,d | d 
参数4 | 时间转换类型 | string | 同时间转换方法 | new Date()
 
 
#### formatStringDateTimes（根据传进的数组字符串或者字符串生成相应的时间）
##### 属性 attr
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
参数1 | 需要转换的数据 | array[data] date | -- | -- 
参数2 |  时间转换类型 | string | 同时间转换方法 | new Date() 
 
 
#### setUnicode（unicode加密工具）
##### 属性 attr
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
参数1 | 需要加密的值 | string | -- | -- 
 
 
#### getUnicode（unicode解码工具）
##### 属性 attr
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
参数1 | 需要解码的值 | string | -- | -- 
 
 
## 联系方式

- qq 317883224@qq.com

## 链接

- [NPM](https://www.npmjs.com/package/configjs-utilsjs)
- [GITHUB](https://github.com/317883224/configjs-utilsjs)
