/*
 * @FileName: config.npm.js
 * @FilePath: \configjs-utilsjs\config\config.npm.js
 * @Author: FYR
 * @Date: 2023-04-12 15:29:48
 * @LastEditors: FYR
 * @LastEditTime: 2024-11-07 15:13:43
 * @Description: 生成npm配置文件的配置文件
 */
import fs from 'fs';
import { resolve } from 'path';

const writerStream = fs.createWriteStream(resolve('./dist/package.json'));
const packageData = JSON.parse(fs.readFileSync(resolve('./package.json'), 'utf-8') || '{}');

packageData.private = false;
delete packageData.scripts;
delete packageData.devDependencies;
writerStream.write(JSON.stringify(packageData, '', '\t'), 'utf-8');
writerStream.end();
try {
    fs.renameSync('./dist/main', './dist/lib');
} catch {}