# configjs-utilsjs

## 介绍

configjs-utilsjs 是纯 js 方法库, 包含：时间转换，数字转换千分符等。

## 特性

-   纯 js

## 更新日志

<!-- 更新日志的标记 -->

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

#### formatTimesForamt 详情说明

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
