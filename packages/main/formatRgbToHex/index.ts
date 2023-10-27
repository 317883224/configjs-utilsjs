/*
 * @FileName: formatRgbToHex
 * @FilePath: \configjs-utilsjs\packages\main\formatRgbToHex\index.ts
 * @Author: FYR
 * @Date: 2023-05-09 11:09:18
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-26 16:28:00
 * @Description: 格式化颜色 RGB 为 HEX
 */

import isNumber from '../isNumber/index';

/*
 * @description: 格式化颜色 RGB 为 HEX
 * @param {number} r rgb中的r，可选值为0~255
 * @param {number} g rgb中的g，可选值为0~255
 * @param {number} b rgb中的b，可选值为0~255
 * @return {string} 格式化后的颜色
 */
export default function formatRgbToHex(r: number, g: number, b: number): string {
    r = Number(r);
    g = Number(g);
    b = Number(b);
    if (isNumber(r) && isNumber(g) && isNumber(b)) {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    } else {
        console.error(new TypeError("r or g or b is not a 'number': Invalid value"));
        return '';
    }
}
