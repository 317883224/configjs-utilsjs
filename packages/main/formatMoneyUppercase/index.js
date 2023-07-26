/*
 * @FileName: formatMoneyUppercase
 * @FilePath: \configjs-utilsjs\packages\main\formatMoneyUppercase\index.js
 * @Author: FYR
 * @Date: 2023-06-21 15:12:09
 * @LastEditors: FYR
 * @LastEditTime: 2023-07-26 10:51:09
 * @Description: 格式化金额为大写
 */

import isNumber from '../isNumber/index.js';

/*
 * @name: 格式化金额为大写
 * @param {number} data 金额数值
 * @return {string} 大写的金额
 */
export default function formatMoneyUppercase(data) {
    if (!isNumber(Number(data))) {
        console.error(new TypeError("value not a 'number': Invalid value"));
        return data;
    }
    let value = []; // 当前值
    const incomings = String(Number(data)).split('.'); // 入参
    const numerical = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']; // 数值
    const unit = ['元', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟', '兆', '拾', '佰', '仟']; // 整数位单位
    const decimalUnit = ['角', '分']; // 小数位单位
    const dataUnit = incomings.map((item, index) =>
        index === 0 ? unit.slice(0, item.length).reverse() : decimalUnit.slice(0, item.length)
    );

    for (let i in incomings[0]) {
        value.push(numerical[incomings[0][i]]);
        value.push(dataUnit[0][i]);
    }
    if (incomings[1]) {
        for (let i in incomings[1]) {
            value.push(numerical[incomings[1][i]]);
            value.push(dataUnit[1][i]);
        }
    } else {
        value.push('整');
    }
    value = value.join('');
    value = value
        .replace(/零[兆仟佰拾]/g, '零')
        .replace(/(零)+/g, '$1')
        .replace(/零([兆亿万元])/g, '$1')
        .replace(/([兆亿万])[兆亿万]+/g, '$1');

    return value;
}
