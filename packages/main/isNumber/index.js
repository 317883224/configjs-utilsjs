/*
 * @FileName: isNumber
 * @FilePath: \configjs-utilsjs\packages\other\isNumber\index.js
 * @Author: FYR
 * @Date: 2023-05-09 11:22:24
 * @LastEditors: FYR
 * @LastEditTime: 2023-05-09 11:24:29
 * @Description: 是否为数字
 */

/*
 * @name: 是否为数字
 * @param {number|string} value 需要判断的值
 * @return {boolean} 判断结果
 */
export default function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
