/*
 * @FileName: moneyUnitConversion
 * @FilePath: \configjs-utilsjs\packages\main\moneyUnitConversion\index.ts
 * @Author: FYR
 * @Date: 2022-11-28 11:54:53
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-26 17:41:23
 * @Description: 金额的单位转换功能
 */

/*
 * @description: 金额的单位转换功能
 * @param {number} money 金额
 * @param {number} decimal 保留的小数
 * @return {[number, string]} [转换后的金额, 金额单位]
 */
export default function moneyUnitConversion(money: number, decimal: number = 0): [number, string] {
    let value = 0;
    let unit = '元';

    if (decimal <= 0) decimal = 0;
    if (money >= 100000000) {
        value = Math.round((money / 100000000) * Math.pow(10, decimal)) / Math.pow(10, decimal);
        unit = '亿';
    } else if (money >= 10000) {
        value = Math.round((money / 10000) * Math.pow(10, decimal)) / Math.pow(10, decimal);
        unit = '万';
    } else if (money > 0) {
        value = Math.round(money * Math.pow(10, decimal)) / Math.pow(10, decimal);
        unit = '元';
    }

    return [value, unit];
}
