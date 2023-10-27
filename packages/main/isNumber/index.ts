/*
 * @FileName: isNumber
 * @FilePath: \configjs-utilsjs\packages\main\isNumber\index.ts
 * @Author: FYR
 * @Date: 2023-05-09 11:22:24
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-26 16:19:28
 * @Description: 是否为数字
 */

/*
 * @description: 判断是否为数字类型
 * @param {any} value 需要判断的值
 * @return {boolean} 判断结果
 */
export default function isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
