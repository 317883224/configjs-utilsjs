/*
 * @FileName: appendScript
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2022-05-12 13:49:18
 * @Description: body 添加 js 标签
 */

/******************************** body 添加 js 标签 **********************************
 * 
 ************属性 attr
 * 	参数			    说明						    类型				    可选值		            默认值
 *	url 			    添加的链接						string			    	--			            --
 * 
 *****************************/
export function appendScript(url) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.charset = 'utf-8';
	script.src = url;
	document.head.appendChild(script);
	return true;
}