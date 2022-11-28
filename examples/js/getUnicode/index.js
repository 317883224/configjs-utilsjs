/*
 * @FileName: getUnicode
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2022-11-28 14:17:58
 * @Description: unicode解码工具
 */


/*
 * @name: unicode解码工具
 * @param {string} value 需要解码的值
 * @return {string} 解后的码
 */
export function getUnicode(value) {
	if (value && value.indexOf('\\u') !== -1) {
		let valArr = value.split('\\u'),
			result = '';
		for (let j = 0, length = valArr.length; j < length; j++) {
			result += String.fromCharCode(parseInt(valArr[j], 16));
		}
		//如果不截取，则会出现空白字符，如何也消除不了
		return result.slice(1);
	} else {
		return '';
	}
}