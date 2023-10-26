/*
 * @FileName: isNumber
 * @FilePath: \configjs-utilsjs\packages\main\isNumber\index.js
 * @Author: FYR
 * @Date: 2023-05-09 11:22:24
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-26 09:49:15
 * @Description: 是否为数字
 */

/*
 * @description: 判断是否为数字类型
 * @param {any} value 需要判断的值
 * @return {boolean} 判断结果
 */
export default function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
