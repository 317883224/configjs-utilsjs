/*
 * @FileName: appendScript
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-04-21 15:35:36
 * @Description: body 添加 js 标签
 */

/*
 * @description: body 添加 js 标签
 * @param {url} url 添加的链接
 * @return {boolean} 是否添加成功
 */
export default function appendScript(url) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.charset = 'utf-8';
	script.src = url;
	document.head.appendChild(script);
	return true;
}