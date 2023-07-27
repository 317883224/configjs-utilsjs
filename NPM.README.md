# configjs-utilsjs

## 介绍

configjs-utilsjs 是纯 js 方法库, 包含：时间转换，数字转换千分符等。

## 特性

-   纯 js

## 版本

### [4.3.1]
-   Bug 修复
    -   修复 [formatThousands](#formatThousands)（千分符）方法接入的参数非法报错的情况，修复后该方法直接输出非法的参数，只有数字或数字字符串才执行后续方法

### [4.3.0]
-   其他
    -   取消 main、other 目录区分，如需要按需引入直接引用对应的文件或者可以选择 babel-plugin-import 等插件

### [4.2.0]
-   新特性
    -   other 目录新增 [formatMoneyUppercase](#formatMoneyUppercase)（金额大写）方法
    -   other 目录新增 [deepCopy](#deepCopy)（深拷贝）方法

### [4.1.0]
-   新特性
    -   other 目录新增 [dictionarySort](#dictionarySort)（字典排序）方法
    -   other 目录新增 [dictionaryClassification](#dictionaryClassification)（字典分类）方法

### [4.0.0]
-   其他
    -   新增 other 目录，里边为一些不常用的方法
-   新特性
    -   other 目录新增 [formatRgbToHex](#formatRgbToHex)（格式化颜色 RGB 为 HEX）方法
    -   other 目录新增 [generateHex](#generateHex)（生成类型为 HEX 的随机颜色）方法
    -   other 目录新增 [getUrlQuery](#getUrlQuery)（获取网址的传参）方法
    -   other 目录新增 [isDarkMode](#isDarkMode)（判断设置主题是否为黑暗模式）方法
    -   other 目录新增 [isNumber](#isNumber)（判断是否为数字类型）方法

### [3.4.0]
-   新特性
    -   新增 [formatRound](#formatRound)（四舍五入，根据需要保留小数位生成）方法

### [3.3.0]
-   新特性
    -   新增 [moneyUnitConversion](#moneyUnitConversion)（金额的单位转换功能）方法
-   优化
    -   修改 [formatTimes](#formatTimes) 方法的 times 参数的默认值，改为传入非法值则不处理直接输出

### [3.2.0]
-   新特性
    -   新增 [moneyUnitConversion](#moneyUnitConversion)（金额的单位转换功能）方法
-   优化
    -   修改 [formatTimes](#formatTimes) 方法的 times 参数的默认值，改为必填

### [3.1.1]
-   优化
    -   修改 [formatThousands](#formatThousands)（千分符）方法的 decimalPlaces 参数规则，不填时不进行处理，为 0 时返回整数
-   Bug 修复
    -   修复 [formatThousands](#formatThousands)（千分符） 方法出现的四舍五入精度丢失的情况

### [3.1.0]
-   新特性
    -   新增 [compareVersion](#compareVersion)（版本比较） 方法
-   优化
    -   修改 代码结构
-   其他
    -   改名 formatMoney 方法改名为 [formatThousands](#formatThousands)（千分符）

### [3.0.1]
-   新特性
    -   新增 [generateDateShortcuts](#generateDateShortcuts)（生成日期快捷，element-ui 专用） 方法
    -   新增 [generateRandomString](#generateRandomString)（生成随机字符串） 方法
-   删除
    -   删除 formatStringDateTimes 方法，可通过 formatTimes 方法实现

### [2.1.4]
-   优化
    -   修改 千分符的方法，从 number 转 string，解决 number 长度问题

### [2.1.3]
-   优化
    -   修改 打包架构，配置按需加载功能

### [1.1.2]
-   Bug 修复
    -   修复 千分符方法 bug ~ 修复 首字母大写 bug

### [1.0.9]
-   优化
    -   修改 formatMoney 方法新增 separators（分隔符） 参数

## 安装

```bash
# npm：
npm i configjs-utilsjs -S
```

## 快速上手

### 例子

```js
// 需要引入的模块，需先安装 babel-plugin-import
import { formatTimes } from 'configjs-utilsjs';

const time = formatTimes(new Date(), 'yyyy-MM-dd');
console.log(time);

// babel-plugin-import配置
plugins: [
    [
        'import',
        {
            libraryName: 'configjs-utilsjs',
            libraryDirectory: 'lib',
            camel2DashComponentName: false
        },
        'configjs-utilsjs'
    ]
];
```

## 文档

<!-- 通过nodejs生成的文档的标记 -->

<a id="formatTimesForamt"></a>

#### format 详情说明

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

#### dateArray item 详情说明

| 参数  |     说明     |  类型  | 可选值 | 默认值 |
| :---: | :----------: | :----: | :----: | :----: |
| text  |     名称     | string |        |   --   | -- |
|   y   | 距离当前年限 | number |   --   |   --   |
|   M   | 距离当前月限 | number |   --   |   --   |
|   d   | 距离当前日限 | number |   --   |   --   |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

## 联系方式

-   qq 317883224@qq.com

## 链接

-   [NPM](https://www.npmjs.com/package/configjs-utilsjs)
-   [GITHUB](https://github.com/317883224/configjs-utilsjs)
