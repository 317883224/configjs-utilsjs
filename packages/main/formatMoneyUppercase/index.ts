/*
 * @FileName: formatMoneyUppercase
 * @FilePath: \configjs-utilsjs\packages\main\formatMoneyUppercase\index.ts
 * @Author: FYR
 * @Date: 2023-06-21 15:12:09
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-26 16:27:27
 * @Description: 金额大写
 */

import isNumber from '../isNumber/index';

/*
 * @description: 金额大写
 * @param {number} amount 金额数值
 * @return {string} 大写的金额
 */
export default function formatMoneyUppercase(amount: number): string {
    if (!isNumber(Number(amount))) {
        console.error(new TypeError("value not a 'number': Invalid value"));
        return String(amount);
    }
    let value = []; // 当前值
    const incomings = String(Number(amount)).split('.'); // 入参
    const numerical = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']; // 数值
    const unit = ['元', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟', '兆', '拾', '佰', '仟']; // 整数位单位
    const decimalUnit = ['角', '分']; // 小数位单位
    const amountUnit = incomings.map((item, index) =>
        index === 0 ? unit.slice(0, item.length).reverse() : decimalUnit.slice(0, item.length)
    );

    for (let i in incomings[0].split('')) {
        value.push(numerical[Number(incomings[0].charAt(Number(i)))]);
        value.push(amountUnit[0][i]);
    }
    if (incomings[1]) {
        for (let i in incomings[1].split('')) {
            value.push(numerical[Number(incomings[1].charAt(Number(i)))]);
            value.push(amountUnit[1][i]);
        }
    } else {
        value.push('整');
    }
    return value
        .join('')
        .replace(/零[兆仟佰拾]/g, '零')
        .replace(/(零)+/g, '$1')
        .replace(/零([兆亿万元])/g, '$1')
        .replace(/([兆亿万])[兆亿万]+/g, '$1');
}
