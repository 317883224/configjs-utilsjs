/*
 * @FileName: appendLink
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2022-05-12 13:49:57
 * @Description: body 添加 link 标签
 */

/******************************** body 添加 link 标签 **********************************
 * 
 ************属性 attr
 * 	参数			    说明						    类型				    可选值		            默认值
 *	url 			    添加的链接						string			    	--			            --
 * 
 *****************************/

export function appendLink(href) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = href;
	document.head.appendChild(link);
	return true;
}