/******************************** 生成随机字符串 **********************************
 * 
 ************属性 attr
 * 	参数			        说明																类型				        可选值		        默认值
 * 	length 					生成长度																number			        	--			        -
 * 	chars 					随机值，默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1						string						--					ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678
 *****************************/
export function generateRandomString(_length = 16, chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678') {
	let charsLength = chars.length;
	let keyStr = '';
	for (i = 0; i < _length; i++) {
		keyStr += chars.charAt(Math.floor(Math.random() * charsLength));
	}
	return keyStr;
}