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

## 引入方法

### 方式一. 自动按需引入 (推荐)
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

```js
// 安装插件
npm i babel-plugin-import -D

// 在 babel.config.js 中配置
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

// 接着你可以在代码中直接使用
import { formatTimes } from 'configjs-utilsjs';

const time = formatTimes(new Date(), 'yyyy-MM-dd');
console.log(time);
```

### 方式二. 手动按需引入
```js
import formatTimes from 'configjs-utilsjs/lib/formatTimes';

const time = formatTimes(new Date(), 'yyyy-MM-dd');
console.log(time);

```

### 方式三. 导入所有
```js
import configjsUtilsjs from 'configjs-utilsjs';

const time = configjsUtilsjs.formatTimes(new Date(), 'yyyy-MM-dd');
console.log(time);

```

## 文档

<!-- 通过nodejs生成的文档的标记 -->

<a id="formatTimes-foramt"></a>
### formatTimes-foramt 详情说明

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

## 联系方式

-   qq 317883224@qq.com

## 链接

-   [NPM](https://www.npmjs.com/package/configjs-utilsjs)
-   [GITHUB](https://github.com/317883224/configjs-utilsjs)
