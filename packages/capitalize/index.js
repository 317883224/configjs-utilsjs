// 首字母大写
// 为组件提供 install 安装方法，供按需引入
function capitalize(string) {
  	return string.replace(/\b\w/, (value, index, string) => value.toUpperCase());
}

// 默认导出组件
export default capitalize;