/*
 * @FileName: generateRandomString
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-08-22 14:49:59
 * @Description: 生成随机字符串
 */

/*
 * @description: 生成随机字符串
 * @param {number} length 生成长度
 * @param {string} chars 随机值，默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
 * @return {string} 生成的字符串
 */
export default function generateRandomString(length = 16, chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678') {
	let charsLength = chars.length;
	let keyStr = '';
	for (let i = 0; i < length; i++) {
		keyStr += chars.charAt(Math.floor(Math.random() * charsLength));
	}
	return keyStr;
}