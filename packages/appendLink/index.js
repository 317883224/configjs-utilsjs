// body 添加 link 标签
function appendLink(href) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = href;
	document.head.appendChild(link);
	return true;
}

export default appendLink;