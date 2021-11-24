// 首字母大写
export function capitalize(string) {
	return string.replace(/\b\w/, (value, index, string) => value.toUpperCase());
}