/*
 * @FileName: getUnicode
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2022-05-12 13:51:43
 * @Description: 解码工具
 */

/******************************** 解码工具 **********************************
 * 
 ************属性 attr
 * 	参数			        说明							类型				        可选值		        默认值
 * 	string 					需要解码的值						string			        	--			        -
 *****************************/

export function getUnicode(string) {
	if (string && string.indexOf('\\u') !== -1) {
		let valArr = string.split('\\u'),
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