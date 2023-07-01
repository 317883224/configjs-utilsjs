# configjs-utilsjs

## 介绍

configjs-utilsjs 是317883224开源的纯js方法库, 包含：时间转换，数字转换千分符等。

## 特性

- 纯 js

## 版本
*  [4.3.1]
	~ 修复 [formatThousands](#formatThousands)（千分符）方法接入的参数非法报错的情况，修复后该方法直接输出非法的参数，只有数字或数字字符串才执行后续方法
*  [4.3.0]
	- 取消 main、other目录区分，如需要按需引入直接引用对应的文件或者可以选择 babel-plugin-import 等插件
*  [4.2.0]
	+ other 目录新增 [formatMoneyUppercase](#formatMoneyUppercase)（金额大写）方法
	+ other 目录新增 [deepCopy](#deepCopy)（深拷贝）方法
*  [4.1.0]
	+ other 目录新增 [dictionarySort](#dictionarySort)（字典排序）方法
	+ other 目录新增 [dictionaryClassification](#dictionaryClassification)（字典分类）方法
*  [4.0.0]
	+ 新增 other 目录，里边为一些不常用的方法
	+ other 目录新增 [formatRgbToHex](#formatRgbToHex)（格式化颜色RGB为HEX）方法
	+ other 目录新增 [generateHex](#generateHex)（生成类型为HEX的随机颜色）方法
	+ other 目录新增 [getUrlQuery](#getUrlQuery)（获取网址的传参）方法
	+ other 目录新增 [isDarkMode](#isDarkMode)（判断设置主题是否为黑暗模式）方法
	+ other 目录新增 [isNumber](#isNumber)（判断是否为数字类型）方法
*  [3.4.0]
	+ 新增 [formatRound](#formatRound)（四舍五入，根据需要保留小数位生成）方法
*  [3.3.0]
	+ 新增 [moneyUnitConversion](#moneyUnitConversion)（金额的单位转换功能）方法
	+ 修改 [formatTimes](#formatTimes) 方法的 times 参数的默认值，改为传入非法值则不处理直接输出
*  [3.2.0]
	+ 新增 [moneyUnitConversion](#moneyUnitConversion)（金额的单位转换功能）方法
	+ 修改 [formatTimes](#formatTimes) 方法的 times 参数的默认值，改为必填
*  [3.1.1]
	+ 修改 [formatThousands](#formatThousands)（千分符）方法的 decimalPlaces 参数规则，不填时不进行处理，为0时返回整数
	~ 修复 [formatThousands](#formatThousands)（千分符） 方法出现的四舍五入精度丢失的情况
*  [3.1.0]
	+ 新增 [compareVersion](#compareVersion)（版本比较） 方法
	+ 改名 formatMoney 方法改名为 [formatThousands](#formatThousands)（千分符）
	+ 修改 代码结构
*  [3.0.1]
	+ 新增 [generateDateShortcuts](#generateDateShortcuts)（生成日期快捷，element-ui专用） 方法
	+ 新增 [generateRandomString](#generateRandomString)（生成随机字符串） 方法
	- 删除 formatStringDateTimes 方法，可通过 formatTimes 方法实现
*  [2.1.4]
	+ 修改 千分符的方法，从number转string，解决number长度问题
*  [2.1.3]
	+ 修改 打包架构，配置按需加载功能
*  [1.1.2]
	~ 修复 千分符方法 bug
	~ 修复 首字母大写 bug
*  [1.0.9]
	+ 修改 formatMoney 方法新增 separators（分隔符） 参数

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

<a id="formatThousands"></a>
### formatThousands（千分符）
#### 属性 attr
|     参数      |       说明       |     类型      | 可选值 | 默认值 |
| :-----------: | :--------------: | :-----------: | :----: | :----: |
|     value     | 需要转千分符的值 | string number |   --   |   --   |
|  separators   |     千分符号     |    string     |   --   |   ,    |
| decimalPlaces |  数值保留小数位  |    number     |   --   |   --   |

#### 返回 return
| 参数  |      说明      |  类型  |
| :---: | :------------: | :----: |
| value | 转换后的字符串 | string |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="formatRound"></a>
### formatRound（四舍五入）
#### 属性 attr
|     参数      |       说明       |     类型      | 可选值 | 默认值 |
| :-----------: | :--------------: | :-----------: | :----: | :----: |
|     value     | 需要转千分符的值 | string number |   --   |   --   |
| decimalPlaces |  数值保留小数位  |    number     |   --   |   0    |

#### 返回 return
| 参数  |      说明      |  类型  |
| :---: | :------------: | :----: |
| value | 转换后的字符串 | string |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="compareVersion"></a>
### compareVersion（版本比较）
#### 属性 attr
|    参数    |     说明      |  类型  | 可选值 | 默认值 |
| :--------: | :-----------: | :----: | :----: | :----: |
|     v1     | 被比较的版本1 | string |   --   |   --   |
|     v2     | 被比较的版本1 | string |   --   |   --   |
| separators |    分隔符     | string |   --   |   .    |

#### 返回 return
| 参数  |                    说明                    |  类型  |
| :---: | :----------------------------------------: | :----: |
| value | 返回值 0: v2 > v1， 1:v1 > v2， 2: v1 = v2 | number |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

### capitalize（首字母大写）
#### 属性 attr
| 参数  |    说明    |  类型  | 可选值 | 默认值 |
| :---: | :--------: | :----: | :----: | :----: |
| value | 首字母大写 | string |   --   |   --   |

#### 返回 return
| 参数  |      说明      |  类型  |
| :---: | :------------: | :----: |
| value | 转换后的字符串 | string |

### appendScript（body 添加 js 标签）
#### 属性 attr
| 参数  |        说明        | 类型  | 可选值 | 默认值 |
| :---: | :----------------: | :---: | :----: | :----: |
|  url  | 添加的 js 标签链接 |  url  |   --   |   --   |

#### 返回 return
| 参数  |     说明     |  类型   |
| :---: | :----------: | :-----: |
| value | 是否添加成功 | boolean |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

### appendLink（body 添加 css 标签）
#### 属性 attr
| 参数  |        说明         | 类型  | 可选值 | 默认值 |
| :---: | :-----------------: | :---: | :----: | :----: |
|  url  | 添加的 css 标签链接 |  url  |   --   |   --   |

#### 返回 return
| 参数  |     说明     |  类型   |
| :---: | :----------: | :-----: |
| value | 是否添加成功 | boolean |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="formatTimes"></a>
### formatTimes（时间转换）
#### 属性 attr
|  参数  |     说明     |        类型        |                可选值                |        默认值         |
| :----: | :----------: | :----------------: | :----------------------------------: | :-------------------: |
| times  |     时间     | array[data] / date |                  --                  |       new date        |
| format | 时间转换类型 |       string       | 具体写法看[详情](#formatTimesForamt) | 'yyyy-MM-dd hh:mm:ss' |

#### 返回 return
| 参数  |     说明     |            类型             |
| :---: | :----------: | :-------------------------: |
| value | 转换后的数据 | formatValeu[] / foramtValue |

#### format 详情说明
<a id="formatTimesForamt"></a>
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

### generateDateTimes（根据开始结束时间生成连续的时间数组）
#### 属性 attr
|   参数    |           说明           |  类型  |        可选值         |   默认值   |
| :-------: | :----------------------: | :----: | :-------------------: | :--------: |
| startTime |         开始时间         |  date  |          --           |     --     |
|  endTime  |         结束时间         |  date  |          --           |     --     |
|   type    | 根据时间中的值来生成数组 | string |         y,M,d         |     d      |
|  format   |       时间转换类型       | string | 同时间转换方法的参数2 | new Date() |

#### 返回 return
| 参数  |     说明     |     类型      |
| :---: | :----------: | :-----------: |
| value | 转换后的数据 | formatValue[] |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

### setUnicode（unicode加密工具）
#### 属性 attr
|  参数  |     说明     |  类型  | 可选值 | 默认值 |
| :----: | :----------: | :----: | :----: | :----: |
| string | 需要加密的值 | string |   --   |   --   |

#### 返回 return
| 参数  |     说明     |  类型  |
| :---: | :----------: | :----: |
| value | 加密后的内容 | string |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

### getUnicode（unicode解码工具）
#### 属性 attr
|  参数  |     说明     |  类型  | 可选值 | 默认值 |
| :----: | :----------: | :----: | :----: | :----: |
| string | 需要解码的值 | string |   --   |   --   |

#### 返回 return
| 参数  |     说明     |  类型  |
| :---: | :----------: | :----: |
| value | 解码后的内容 | string |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="generateDateShortcuts"></a>
### generateDateShortcuts（根据数据生成日期快捷，element-ui专用）
#### 属性 attr
|    参数     |         说明         |  类型  | 可选值 | 默认值 |
| :---------: | :------------------: | :----: | :----: | :----: |
|  dateArray  | 根据数据生成日期快捷 | array  |   --   |   --   |
| valueFormat |    生成的时间类型    | string |   --   |   --   |

#### dateArray item 详情说明
| 参数  |     说明     |  类型  | 可选值 | 默认值 |
| :---: | :----------: | :----: | :----: | :----: |
| text  |     名称     | string |        |   --   | -- |
|   y   | 距离当前年限 | number |   --   |   --   |
|   M   | 距离当前月限 | number |   --   |   --   |
|   d   | 距离当前日限 | number |   --   |   --   |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="generateRandomString"></a>
### generateRandomString（生成随机字符串）
#### 属性 attr
|  参数  |                       说明                        |  类型  | 可选值 |                      默认值                      |
| :----: | :-----------------------------------------------: | :----: | :----: | :----------------------------------------------: |
| length |                     生成长度                      | number |   --   |                        --                        |
| chars  | 随机值，默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1 | string |   --   | ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678 |

#### 返回 return
| 参数  |     说明     |  类型  |
| :---: | :----------: | :----: |
| value | 生成的字符串 | string |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="moneyUnitConversion"></a>
### moneyUnitConversion（金额的单位转换功能）
#### 属性 attr
|  参数   |    说明    |  类型  | 可选值 | 默认值 |
| :-----: | :--------: | :----: | :----: | :----: |
|  money  |    金额    | number |   --   |   --   |
| decimal | 保留的小数 | number |   --   |   --   |

#### 返回 return
|     参数      |           说明           |       类型       |
| :-----------: | :----------------------: | :--------------: |
| [money, unit] | [转换后的金额, 金额单位] | [number, string] |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="formatRgbToHex"></a>
### formatRgbToHex（格式化颜色RGB为HEX）
#### 属性 attr
| 参数  |   说明   |  类型  | 可选值 | 默认值 |
| :---: | :------: | :----: | :----: | :----: |
|  red  | rgb中的r | number | 0~255  |   --   |
| green | rgb中的g | number | 0~255  |   --   |
| blue  | rgb中的b | number | 0~255  |   --   |

#### 返回 return
| 参数  |      说明      | 类型  |
| :---: | :------------: | :---: |
| value | 格式化后的颜色 |  hex  |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="generateHex"></a>
### generateHex（生成类型为HEX的随机颜色）
#### 返回 return
| 参数  |       说明        | 类型  |
| :---: | :---------------: | :---: |
| value | hex类型的随机颜色 |  hex  |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="getUrlQuery"></a>
### getUrlQuery（获取网址的传参）
#### 属性 attr
| 参数  | 说明  |    类型    | 可选值 | 默认值 |
| :---: | :---: | :--------: | :----: | :----: |
|  url  | 网址  | https/http |   --   |   --   |

#### 返回 return
| 参数  |    说明    | 类型  |
| :---: | :--------: | :---: |
| value | 路由的传值 | json  |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="isDarkMode"></a>
### isDarkMode（判断设置主题是否为黑暗模式）
#### 返回 return
| 参数  |   说明   |  类型   |
| :---: | :------: | :-----: |
| value | 判断结果 | boolean |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="isNumber"></a>
### isNumber（判断是否为数字类型）
#### 属性 attr
| 参数  |     说明     |     类型      | 可选值 | 默认值 |
| :---: | :----------: | :-----------: | :----: | :----: |
| value | 需要判断的值 | number/string |   --   |   --   |

#### 返回 return
| 参数  |   说明   |  类型   |
| :---: | :------: | :-----: |
| value | 判断结果 | boolean |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="dictionarySort"></a>
### dictionarySort（字典排序）
#### 属性 attr
| 参数  |                说明                |   类型   | 可选值 | 默认值 |
| :---: | :--------------------------------: | :------: | :----: | :----: |
| data  |            需要排序的值            | string[] |   --   |   --   |
| type  | 排序类型，0：默认 1：比默认多A-Z值 |  number  |   --   |   0    |

#### 返回 return
| 参数  |    说明    |   类型   |
| :---: | :--------: | :------: |
| value | 排序后的值 | string[] |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="dictionaryClassification"></a>
### dictionaryClassification（字典分类）
#### 属性 attr
| 参数  |     说明     |   类型   | 可选值 | 默认值 |
| :---: | :----------: | :------: | :----: | :----: |
| data  | 需要分类的值 | string[] |   --   |   --   |

#### 返回 return
| 参数  |    说明    |       类型        |
| :---: | :--------: | :---------------: |
| value | 分类后的值 | {string: any[]}[] |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="formatMoneyUppercase"></d>
### formatMoneyUppercase（金额大写）
#### 属性 attr
| 参数  |   说明   |  类型  | 可选值 | 默认值 |
| :---: | :------: | :----: | :----: | :----: |
| data  | 金额数值 | number |   --   |   --   |

#### 返回 return
| 参数  |    说明    |  类型  |
| :---: | :--------: | :----: |
| value | 大写的金额 | string |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>

<a id="deepCopy"></d>
### deepCopy（深拷贝）
#### 属性 attr
| 参数  |   说明   | 类型  | 可选值 | 默认值 |
| :---: | :------: | :---: | :----: | :----: |
| data  | 被拷贝值 |  any  |   --   |   --   |

#### 返回 return
| 参数  |     说明     | 类型  |
| :---: | :----------: | :---: |
| value | 拷贝出来的值 |  any  |

<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>


## 联系方式

- qq 317883224@qq.com

## 链接

- [NPM](https://www.npmjs.com/package/configjs-utilsjs)
- [GITHUB](https://github.com/317883224/configjs-utilsjs)