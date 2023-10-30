/*
 * @FileName: formatThousands
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-30 10:59:45
 * @Description: 格式化数值为千分符
 */

import formatRound from '../formatRound/index';
import isNumber from '../isNumber/index';

/*
 * @description: 千分符
 * @param {string|number} value 需要转千分符的值
 * @param {string} separators 千分符号
 * @param {number|undefined} decimalPlaces 数值保留小数位
 * @return {string} 转换后的字符串
 */
export default function formatThousands(
    value: string | number,
    separators: string = ',',
    decimalPlaces?: number | undefined
): string {
    if (!isNumber(value)) return String(value);
    let valueArray = formatRound(value, decimalPlaces).split('.'); // 切分整数与小数

    // 整数部分
    valueArray[0] = valueArray[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + separators);

    return valueArray.join('.'); // 过滤小数为空
}
