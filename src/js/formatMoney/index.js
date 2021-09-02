/******************************** 数字格式化为金钱 **********************************
 * 
 ************属性 attr
 * 	参数			    		说明						    类型				    可选值		            默认值
 * 	value 					需要转金钱格式的值				string number				--			            --
 * 	decimalPlaces 			金钱保留小数位					number						--						0
 * 	separators 				千分符号							string 						--						,
 * 
 *****************************/
export function formatMoney(value, separators = ',', decimalPlaces) {
	let valueArray = String(value).split('.'); //切分整数与小数
	valueArray[0] = valueArray[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + separators); // 整数部分
	 // 小数部分
	if(!valueArray[1]) valueArray[1] = '';
	if (decimalPlaces == 0) {
		valueArray[1] = '';
	} else if (decimalPlaces > 0) {
		let difference = decimalPlaces - valueArray[1].toString().length;
		if(difference >= 0){
			for (var i = 0; i < difference; i++) {
				valueArray[1] += '0';
			}
		}else{
			valueArray[1] = Math.round( valueArray[1] * Math.pow(10, difference)) || ''
		}
	}
	return valueArray.filter(item => item).join('.'); // 过滤小数为空
}