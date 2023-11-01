/*
 * @FileName: config.npm.js
 * @FilePath: \configjs-utilsjs\config\config.npm.js
 * @Author: FYR
 * @Date: 2023-04-12 15:29:48
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 14:25:01
 * @Description: 生成npm配置文件的配置文件
 */

const fs = require('fs');
const { resolve } = require('path');
const writerStream = fs.createWriteStream(resolve('./dist/package.json'));
let packageData = require('../package.json') || {};

packageData.private = false;
delete packageData.scripts;
delete packageData.devDependencies;
writerStream.write(JSON.stringify(packageData, '', '\t'), 'utf-8');
writerStream.end();
try {
    fs.renameSync('./dist/main', './dist/lib');
} catch {}