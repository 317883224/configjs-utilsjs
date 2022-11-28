/*
 * @FileName: appendLink
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2022-11-28 14:15:15
 * @Description: body 添加 link 标签
 */

/*
 * @name: body 添加 link 标签
 * @param {url} href 添加的链接
 * @return {boolean} 是否添加成功
 */
export function appendLink(href) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = href;
	document.head.appendChild(link);
	return true;
}