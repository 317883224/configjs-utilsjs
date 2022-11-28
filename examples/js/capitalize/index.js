/*
 * @FileName: capitalize
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2022-11-28 13:54:18
 * @Description: 首字母大写
 */

/*
 * @name: 首字母大写
 * @param {string} value 需要转换的内容
 * @return {string} 转换后的字符串
 */
export function capitalize(value) {
	return value.replace(/\b\w/, (item) => item.toUpperCase());
}