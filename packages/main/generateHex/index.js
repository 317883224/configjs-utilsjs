/*
 * @FileName: generateHex
 * @FilePath: \configjs-utilsjs\packages\main\generateHex\index.js
 * @Author: FYR
 * @Date: 2023-05-09 11:43:33
 * @LastEditors: FYR
 * @LastEditTime: 2023-07-27 15:41:33
 * @Description: 生成hex类型的随机颜色
 */

/*
 * @description: 生成hex类型的随机颜色
 * @return {hex} hex类型的随机颜色
 */
export default function generateHex() {
    return `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, '0')}`;
}
