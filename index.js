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

// 首字母大写
export function capitalize(string) {
	return string.replace(/\b\w/, (value, index, string) => value.toUpperCase());
}

// body 添加 js 标签
export function appendScript(url) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.charset = 'utf-8';
	script.src = url;
	document.head.appendChild(script);
	return true;
}

// body 添加 css 标签
export function appendLink(href) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = href;
	document.head.appendChild(link);
	return true;
}

/******************************** 时间转换 **********************************
 * 
 ************属性 attr
 * 	参数			    说明						    类型				    可选值		            默认值
 * 	times 			时间							array[data] date			--			            new date
 * 	format 			时间转换类型					string				具体写法看详情			'yyyy-MM-dd hh:mm:ss' 
 * 
 * 
 * ************format详情说明
 * 	参数			    说明				    范围
 * 	y 				年					1~4
 * 	M 				月					1~2
 * 	d 				日					1~2
 * 	h 				小时			    	1~2
 * 	m 				分					1~2
 * 	s 				秒					1~2
 * 	q 				季度			    	1~2
 * 	S 				毫秒				    1
 * 	t 				时间戳				1
 * 	w 				星期				    1
 *****************************/
export function formatTimes(times = new Date(), format = 'yyyy-MM-dd hh:mm:ss') {
	let timesType = Array.isArray(times); //判断是否是数组
	times = timesType ? times : [times];
	times.forEach((item, index, array) => {
		let _item = format;
		item = new Date(item);
		const o = {
			"M+": item.getMonth() + 1, //月份
			"d+": item.getDate(), //日
			"h+": item.getHours(), //小时
			"m+": item.getMinutes(), //分
			"s+": item.getSeconds(), //秒
			"q+": Math.floor((item.getMonth() + 3) / 3), //季度
			"S": item.getMilliseconds(), //毫秒
			"t": item.getTime(), //时间戳
			"w": item.getDay(), //星期
		};

		if (/(y+)/.test(_item)) {
			_item = _item.replace(RegExp.$1, (item.getFullYear() + "").substr(4 - RegExp.$1.length));
		}

		for (let k in o) {
			if (new RegExp("(" + k + ")").test(_item)) {
				_item = _item.replace(
					RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length))
				);
			}
		}
		times[index] = _item;
	})
	return timesType ? times : times[0];
}


/******************************** 根据开始结束时间生成连续的时间数组 **********************************
 * 
 ************属性 attr
 * 	参数			    说明						类型				    可选值		        默认值
 * 	startTime 			开始时间						date			        --			        -
 * 	endTime 			结束时间						date			        --			        -
 * 	type				格式						string					y,M,d				d
 * 	format 			    时间转换类型					string				    同时间转换方法		new Date()
 *****************************/
export function generateDateTimes(startTime, endTime, type = 'd', format) {
	let dateTimes = [startTime];
	let interval = 0;
	type = type.toUpperCase();
	switch (type) {
		case 'Y':
			interval = endTime.getFullYear() - startTime.getFullYear();
			break;
		case 'M':
			interval = (endTime.getFullYear() - startTime.getFullYear()) * 12 + (endTime.getMonth() - startTime
				.getMonth());
			break;
		case 'D':
			interval = Math.floor((endTime - startTime) / (1000 * 60 * 60 * 24));
			break;
		default:
			;
	}
	for (let i = 0; i < interval; i++) {
		let _time = new Date(startTime);
		switch (type) {
			case 'Y':
				_time.setFullYear(_time.getFullYear() + (i + 1));
				break;
			case 'M':
				_time.setMonth(_time.getMonth() + (i + 1));
				break;
			case 'D':
				_time.setDate(_time.getDate() + (i + 1));
				break;
			default:
				;
		}
		dateTimes.push(_time);
	}
	return format ? formatTimes(dateTimes, format) : dateTimes.reverse();
}




/******************************** 根据传进的数组字符串或者字符串生成相应的时间 **********************************
 * 
 ************属性 attr
 * 	参数			            说明							类型				        可选值		        默认值
 * 	dateTimesArray 			需要转换的数据			date array			    --			        -
 * 	format 			        时间转换类型					string				    同时间转换方法		new Date()
 *****************************/
export function formatStringDateTimes(dateTimesArray, format) {
	let _dateTimesArray = Array.isArray(dateTimesArray) ? dateTimesArray : [dateTimesArray].map((item) => {
		return new Date(...item.replace(/\D/g, ',').split(','));
	})
	dateTimesArray = Array.isArray(dateTimesArray) ? _dateTimesArray : _dateTimesArray[0];
	return format ? formatTimes(dateTimesArray, format) : dateTimesArray;
}

/******************************** 根据数据生成日期快捷 el-date Shortcuts用 **********************************
 * 
 ************属性 attr
 * 	参数			        说明							类型				        可选值		        默认值
 * 	dateArray 			根据数据生成日期快捷			array			        --			        -
 * 
 * ************dateArray item
 * 	参数			    说明							类型				        可选值		        默认值
 * 	text 			名称			                string  			    --			        -
 *  y 				距离当前年限					string number           --                  --
 * 	M 				距离当前月限					string number           --                  --
 * 	d 				距离当前日限					string number           --                  --
 *****************************/
export function generateDateShortcuts(dateArray, valueFormat) {
	return dateArray.map((item) => {
		return {
			text: item.text,
			onClick(picker) {
				const end = new Date();
				const start = new Date();
				start.setYear(start.getFullYear() - (item.y || 0));
				start.setMonth(start.getMonth() - (item.M || 0));
				start.setDate(start.getDate() - (item.d || 0));
				start.setHours(0);
				start.setMinutes(0);
				start.setSeconds(0);
				end.setHours(23);
				end.setMinutes(59);
				end.setSeconds(59);
				picker.$emit('pick', formatTimes([start, end], valueFormat));
			}
		}
	})
}



/******************************** unicode加密工具 **********************************
 * 
 ************属性 attr
 * 	参数			        说明							类型				        可选值		        默认值
 * 	string 					需要加密的值						string			        	--			        -
 *****************************/
export function setUnicode(string) {
	let value = '';
	if (string) {
		for (var i = 0, len = string.length; i < len; i++) {
			value += '\\u' + string[i].charCodeAt(0).toString(16);
		}
		return value;
	}
}

/******************************** 解码工具 **********************************
 * 
 ************属性 attr
 * 	参数			        说明							类型				        可选值		        默认值
 * 	string 					需要解码的值						string			        	--			        -
 *****************************/
export function getUnicode(string) {
	if (string && string.indexOf('\\u') !== -1) {
		let valArr = string.split('\\u'),
			result = '';
		for (let j = 0, length = valArr.length; j < length; j++) {
			result += String.fromCharCode(parseInt(valArr[j], 16));
		}
		//如果不截取，则会出现空白字符，如何也消除不了
		return result.slice(1);
	} else {
		return false;
	}
}
