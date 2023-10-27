/*
 * @FileName: generateHex
 * @FilePath: \configjs-utilsjs\packages\main\generateHex\index.js
 * @Author: FYR
 * @Date: 2023-05-09 11:43:33
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-26 09:35:06
 * @Description: 生成hex类型的随机颜色
 */

/*
 * @description: 生成hex类型的随机颜色
 * @return {string} hex类型的随机颜色
 */
export default function generateHex(): string {
    return `#${(Math.floor(Math.random() * 0xffffff).toString(16) as any).padEnd(6, '0')}`;
}
