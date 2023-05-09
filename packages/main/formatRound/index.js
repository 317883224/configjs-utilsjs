/*
 * @FileName: formatRound
 * @FilePath: \configjs-utilsjs\packages\js\formatRound\index.js
 * @Author: FYR
 * @Date: 2023-04-21 11:06:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-04-24 09:16:27
 * @Description: 格式化数值为四舍五入
 */

/*
 * @name: 四舍五入
 * @param {string|number} value 数值
 * @param {number} decimalPlaces 保留小数位
 * @return {string} 转换后的数值
 */
export default function formatRound(value, decimalPlaces = 0) {
    if (isNaN(Number(value))) return value;
    let valueArray = String(value).split('.'); // 根据小数点切分数据

    /* 小数部分 */
    if (!valueArray[1]) valueArray[1] = '';
    if (decimalPlaces === 0) {
        return String(Math.round(value));
    } else if (decimalPlaces > 0) {
        const difference = decimalPlaces - valueArray[1].length; // 需要填充的值的个数

        if (difference >= 0) {
            valueArray[1] = valueArray[1].padEnd(decimalPlaces, '0');
        } else {
            valueArray[1] = Math.round(valueArray[1] * Math.pow(10, difference)) || '';
        }
    }

    if (!valueArray[1]) valueArray.splice(1, 1);

    return valueArray.join('.'); // 过滤小数为空
}
