/*
 * @FileName: formatThousands
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2022-05-17 12:04:12
 * @Description: 格式化数组为千分符
 */
/******************************** 千分符 **********************************
 *
 ************属性 attr
 * 	参数			    		说明						    类型				    可选值		            默认值
 * 	value 						数值				string number				--			            --
 * 	decimalPlaces 				保留小数位					number						--						0
 * 	separators 					分隔符							string 						--						,
 *
 *****************************/
export function formatThousands(value, separators = ',', decimalPlaces) {
	let valueArray = String(value).split('.'); //切分整数与小数

	// 整数部分
	valueArray[0] = valueArray[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + separators);

	// 小数部分
	if (!valueArray[1]) valueArray[1] = '';
	if (decimalPlaces > 0) {
		let difference = decimalPlaces - valueArray[1].length; // 需要填充的值的个数
		if (difference >= 0) {
			valueArray[1] = valueArray[1].padEnd(decimalPlaces, '0');
		} else {
			valueArray[1] = valueArray[1].substr(0, decimalPlaces - 1) +
				(Number(valueArray[1][decimalPlaces - 1]) + (valueArray[1][decimalPlaces] > 5 ? 1 : 0)); // 舍数位前一位 + （舍数位的数 + 舍数位后一位的四舍五入）
			// valueArray[1] = Math.round( valueArray[1] * Math.pow(10, difference)) || '';
		}
	}
	return valueArray.filter((item) => item).join('.'); // 过滤小数为空
}
