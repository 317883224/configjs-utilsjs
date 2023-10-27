/*
 * @FileName: setUnicode
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-26 17:41:58
 * @Description: unicode加密工具
 */

 /*
 * @description: unicode加密工具
 * @param {string} str 需要加密的值
 * @return {string} 解码后的内容
 */
export default function setUnicode(str: string): string {
	let value = '';
	if (str) {
		for (var i = 0; i < str.length; i++) {
			value += '\\u' + str[i].charCodeAt(0).toString(16);
		}
	}
	return value;
}