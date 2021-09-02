// body 添加 js 标签
function appendScript(url) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.charset = 'utf-8';
	script.src = url;
	document.head.appendChild(script);
	return true;
}

export default appendScript;