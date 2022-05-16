/*
 * @FileName: capitalize
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2022-05-12 13:47:41
 * @Description: 首字母大写
 */

/******************************** 首字母大写 **********************************
 * 
 ************属性 attr
 * 	参数			    说明						    类型				    可选值		            默认值
 *	value 			    需要转换的内容					string			    	--			            --
 * 
 *****************************/

export function capitalize(value) {
	return value.replace(/\b\w/, (item) => item.toUpperCase());
}