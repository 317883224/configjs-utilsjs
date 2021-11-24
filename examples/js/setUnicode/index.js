/******************************** unicode加密工具 **********************************
 * 
 ************属性 attr
 * 	参数			        说明							类型				        可选值		        默认值
 * 	string 					需要加密的值						string			        	--			        -
 *****************************/
export function setUnicode(string) {
	let value = '';
	if (string) {
		for (var i = 0; i < string.length; i++) {
			value += '\\u' + string[i].charCodeAt(0).toString(16);
		}
	}
	return value;
}