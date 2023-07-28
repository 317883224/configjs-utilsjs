# configjs-utilsjs

[TOC]

## 项目起步
```
npm install
```

## 编译项目
```
npm run serve
```

## 打包
```
npm run build
```

## 检查代码格式
```
npm run jshint
```

## 项目目录结构
├─ assets（文件目录）
├─ config（配置目录）
├─ dist（上传到npm的代码）
├─ packages（开发目录）
├─ serve（运行目录）

## assets/readmeTemplate.md 配置
### 描述/注意点
提交到 npm 的 README.md 模板

## assets/changlog.md 配置
### 描述/注意点
更新日志，提供给模板合并成提交到 npm 的 README.md 使用
    1. 新增 xxx 方法，xxx左右需要保留一个空格
    2. 不同类型的描述需要分类

### 模板
``` markdown
### [版本]
-   [类型] // 类型有 新特性、Bug 修复、其他、优化、删除
    -   [描述] // 新增 xxx 方法
```
