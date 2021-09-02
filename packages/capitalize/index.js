// 首字母大写
function capitalize(string) {
	return string.replace(/\b\w/, (value, index, string) => value.toUpperCase());
}

export default capitalize;