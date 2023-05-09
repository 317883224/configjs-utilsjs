/*
 * @FileName: config.npm.js
 * @FilePath: \vue2-vant2-components\config\config.npm.js
 * @Author: FYR
 * @Date: 2023-04-12 15:29:48
 * @LastEditors: FYR
 * @LastEditTime: 2023-04-17 10:22:59
 * @Description: 生成npm配置文件的配置文件
 */

const fs = require('fs');
const { resolve } = require('path');
const writerStream = fs.createWriteStream(resolve('./dist/package.json'));
let packageData = require('../package.json') || {};

JSON.parse(JSON.stringify(packageData));
packageData.private = false;
delete packageData.scripts;
delete packageData.devDependencies;
writerStream.write(JSON.stringify(packageData),'utf-8');
writerStream.end();
fs.copyFileSync('./NPM.README.md', './dist/README.md');