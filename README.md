# configjs-utilsjs

## 介绍

configjs-utilsjs 是317883224开源的纯js方法库, 包含：时间转换，数字转换千分符等。

## 特性

- 纯 js

## 版本
*  [3.1.1]
	+ 修改 formatThousands 方法的 decimalPlaces 参数规则，不填时不进行处理，为0时返回整数
	+ 修复 formatThousands 方法出现的四舍五入精度丢失的情况
*  [3.1.0]
	+ 新增 compareVersion（版本比较） 方法
	+ 改名 formatMoney 方法改名为 formatThousands
	+ 修改代码结构
*  [3.0.1]
	+ 改回 gulp，更轻量，但无按需加载功能
	+ 新增 generateDateShortcuts（生成日期快捷，element-ui专用） 方法
	+ 新增 generateRandomString（生成随机字符串） 方法
	+ 删除 formatStringDateTimes 方法，可通过 formatTimes 方法实现
*  [2.1.4]
	+ 修改千分符的方法，从number转string，解决number长度问题
*  [2.1.3]
	+ 修改打包架构，配置按需加载功能
*  [1.1.2]
	+ 修复千分符方法 bug
	+ 修复首字母大写 bug
*  [1.0.9]
	+ formatMoney 方法新增 separators（分隔符） 参数
 
## 安装

```bash
# npm：
npm i configjs-utilsjs -S
```
 
## 快速上手
 
### 例子
```js
// 需要引入的模块
import { formatTimes } from 'configjs-utilsjs';

const time = formatTimes(new Date(), 'yyyy-MM-dd');
console.log(time)
```

## 文档
 
#### formatThousands（千分符）
##### 属性 attr
|     参数      |       说明       |     类型      | 可选值 | 默认值 |
| :-----------: | :--------------: | :-----------: | :----: | :----: |
|     value     | 需要转千分符的值 | string number |   --   |   --   |
| decimalPlaces |  数值保留小数位  |    number     |   --   |   --   |
|  separators   |     千分符号     |    string     |   --   |   --   |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

#### compareVersion（版本比较）
##### 属性 attr
|    参数    |     说明      |  类型  | 可选值 | 默认值 |
| :--------: | :-----------: | :----: | :----: | :----: |
|     v1     | 被比较的版本1 | string |   --   |   --   |
|     v2     | 被比较的版本1 | string |   --   |   --   |
| separators |    分隔符     | string |   --   |   .    |

##### 返回值 return
| 参数  |  类型  |                  说明                  |
| :---: | :----: | :------------------------------------: |
| value | number | 返回值 0: v2 > v1 1:v1 > v2 2: v1 = v2 |
 
<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

#### capitalize（首字母大写）
##### 属性 attr
| 参数  |    说明    |  类型  | 可选值 | 默认值 |
| :---: | :--------: | :----: | :----: | :----: |
| value | 首字母大写 | string |   --   |   --   |
 
 
#### appendScript（body 添加 js 标签）
##### 属性 attr
| 参数  |        说明        | 类型  | 可选值 | 默认值 |
| :---: | :----------------: | :---: | :----: | :----: |
|  url  | 添加的 js 标签链接 |  url  |   --   |   --   |
 
<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>
 
#### appendLink（body 添加 css 标签）
##### 属性 attr
| 参数  |        说明         | 类型  | 可选值 | 默认值 |
| :---: | :-----------------: | :---: | :----: | :----: |
|  url  | 添加的 css 标签链接 |  url  |   --   |   --   |
 
<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>
 
#### formatTimes（时间转换）
##### 属性 attr
|  参数  |     说明     |       类型       |     可选值     |        默认值         |
| :----: | :----------: | :--------------: | :------------: | :-------------------: |
| times  |     时间     | array[data] date |       --       |       new date        |
| format | 时间转换类型 |      string      | 具体写法看详情 | 'yyyy-MM-dd hh:mm:ss' |
 
##### format 详情说明
| 参数  |  说明  | 范围  |
| :---: | :----: | :---: |
|   y   |   年   |  1~4  |
|   M   |   月   |  1~2  |
|   d   |   日   |  1~2  |
|   h   |  小时  |  1~2  |
|   m   |   分   |  1~2  |
|   s   |   秒   |  1~2  |
|   q   |  季度  |  1~2  |
|   S   |  毫秒  |   1   |
|   t   | 时间戳 |   1   |
|   w   |  星期  |   1   |
 
<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>
 
#### generateDateTimes（根据开始结束时间生成连续的时间数组）
##### 属性 attr
|   参数    |           说明           |  类型  |        可选值         |   默认值   |
| :-------: | :----------------------: | :----: | :-------------------: | :--------: |
| startTime |         开始时间         |  date  |          --           |     --     |
|  endTime  |         结束时间         |  date  |          --           |     --     |
|   type    | 根据时间中的值来生成数组 | string |         y,M,d         |     d      |
|  format   |       时间转换类型       | string | 同时间转换方法的参数2 | new Date() |
 
<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

#### setUnicode（unicode加密工具）
##### 属性 attr
|  参数  |     说明     |  类型  | 可选值 | 默认值 |
| :----: | :----------: | :----: | :----: | :----: |
| string | 需要加密的值 | string |   --   |   --   |
 
<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>
 
#### getUnicode（unicode解码工具）
##### 属性 attr
|  参数  |     说明     |  类型  | 可选值 | 默认值 |
| :----: | :----------: | :----: | :----: | :----: |
| string | 需要解码的值 | string |   --   |   --   |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

#### generateDateShortcuts（根据数据生成日期快捷，element-ui专用）
##### 属性 attr
|    参数     |         说明         |  类型  | 可选值 | 默认值 |
| :---------: | :------------------: | :----: | :----: | :----: |
|  dateArray  | 根据数据生成日期快捷 | array  |   --   |   --   |
| valueFormat |    生成的时间类型    | string |   --   |   --   |

##### dateArray item 详情说明
| 参数  |     说明     |  类型  | 可选值 | 默认值 |
| :---: | :----------: | :----: | :----: | :----: |
| text  |     名称     | string |        |   --   | -- |
|   y   | 距离当前年限 | number |   --   |   --   |
|   M   | 距离当前月限 | number |   --   |   --   |
|   d   | 距离当前日限 | number |   --   |   --   |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

#### generateRandomString（生成随机字符串）
##### 属性 attr
|  参数  |                       说明                        |  类型  | 可选值 |                      默认值                      |
| :----: | :-----------------------------------------------: | :----: | :----: | :----------------------------------------------: |
| length |                     生成长度                      | number |   --   |                        --                        |
| chars  | 随机值，默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1 | string |   --   | ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678 |
 
<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>
 
## 联系方式

- qq 317883224@qq.com

## 链接

- [NPM](https://www.npmjs.com/package/configjs-utilsjs)
- [GITHUB](https://github.com/317883224/configjs-utilsjs)