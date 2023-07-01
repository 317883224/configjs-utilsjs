/*
 * @FileName: formatThousands
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-07-01 10:46:38
 * @Description: 格式化数值为千分符
 */

import formatRound from '../formatRound/index.js';
import isNumber from '../isNumber/index.js';

/*
 * @name: 千分符
 * @param {string|number} value 数值
 * @param {string} separators 分隔符
 * @param {number} decimalPlaces 保留小数位
 * @return {string} 转换后的字符串
 */
export default function formatThousands(value, separators = ',', decimalPlaces = null) {
	if(!isNumber(value)) return value;
	let valueArray = formatRound(value, decimalPlaces).split('.'); // 切分整数与小数

	// 整数部分
	valueArray[0] = valueArray[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + separators);

	return valueArray.join('.'); // 过滤小数为空
}
