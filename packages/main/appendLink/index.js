/*
 * @FileName: appendLink
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-07-27 14:33:16
 * @Description: body 添加 link 标签
 */

/*
 * @description: body 添加 link 标签
 * @param {url} url 添加的链接
 * @return {boolean} 是否添加成功
 */
export default function appendLink(url) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = url;
	document.head.appendChild(link);
	return true;
}