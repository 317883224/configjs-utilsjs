/*
 * @FileName: formatRgbToHex
 * @FilePath: \configjs-utilsjs\packages\main\formatRgbToHex\index.js
 * @Author: FYR
 * @Date: 2023-05-09 11:09:18
 * @LastEditors: FYR
 * @LastEditTime: 2023-07-26 10:53:18
 * @Description: 颜色RGB转HEX
 */

import isNumber from '../isNumber/index.js';

/*
 * @name: 颜色RGB转HEX
 * @param {0~255} r rgb中的r
 * @param {0~255} g rgb中的g
 * @param {0~255} b rgb中的b
 * @return {hex} 格式化后的颜色
 */
export default function formatRgbToHex(r, g, b) {
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
