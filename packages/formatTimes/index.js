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
function formatTimes(times = new Date(), format = 'yyyy-MM-dd hh:mm:ss') {
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

export default formatTimes