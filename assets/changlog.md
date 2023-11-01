### [5.0.1]
-   优化
    -   调整一些方法

### [5.0.0]
-   新特性
    -   补充d.ts类型说明文件
-   删除
    -   删除 formatMoney 方法
    -   删除 generateDateShortcuts 方法

### [4.5.0]
-   优化
    -   修改 appendLink 方法参数类型可传数组，同时修改返回值为Promise
    -   修改 appendScript 方法参数类型可传数组，同时修改返回值为Promise

### [4.4.0]
-   新特性
    -   新增 getURLSearchParams 方法

### [4.3.1]
-   Bug 修复
    -   修复 formatThousands 方法接入的参数非法报错的情况，修复后该方法直接输出非法的参数，只有数字或数字字符串才执行后续方法

### [4.3.0]
-   其他
    -   取消 main、other 目录区分，如需要按需引入直接引用对应的文件或者可以选择 babel-plugin-import 等插件

### [4.2.0]
-   新特性
    -   other 目录新增 formatMoneyUppercase 方法
    -   other 目录新增 deepCopy 方法

### [4.1.0]
-   新特性
    -   other 目录新增 dictionarySort 方法
    -   other 目录新增 dictionaryClassification 方法

### [4.0.0]
-   其他
    -   新增 other 目录，里边为一些不常用的方法
-   新特性
    -   other 目录新增 formatRgbToHex 方法
    -   other 目录新增 generateHex 方法
    -   other 目录新增 getUrlQuery 方法
    -   other 目录新增 isDarkMode 方法
    -   other 目录新增 isNumber 方法

### [3.4.0]
-   新特性
    -   新增 formatRound 方法

### [3.3.0]
-   新特性
    -   新增 moneyUnitConversion 方法
-   优化
    -   修改 formatTimes 方法的 times 参数的默认值，改为传入非法值则不处理直接输出

### [3.2.0]
-   新特性
    -   新增 moneyUnitConversion 方法
-   优化
    -   修改 formatTimes 方法的 times 参数的默认值，改为必填

### [3.1.1]
-   优化
    -   修改 formatThousands 方法的 decimalPlaces 参数规则，不填时不进行处理，为 0 时返回整数
-   Bug 修复
    -   修复 formatThousands 方法出现的四舍五入精度丢失的情况

### [3.1.0]
-   新特性
    -   新增 compareVersion 方法
-   优化
    -   修改 代码结构
-   其他
    -   改名 formatMoney 方法改名为 formatThousands

### [3.0.1]
-   新特性
    -   新增 generateDateShortcuts 方法
    -   新增 generateRandomString 方法
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
