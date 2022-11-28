/*
 * @FileName: formatTimes
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2022-11-28 14:07:35
 * @Description: 时间转换
 */

/*
 * @name: 时间转换
 * @param {array[data]|date} times 时间
 * @param {string} format 时间转换类型
 * @return {array[formatValeu]|foramtValue}
 */
export function formatTimes(times, format = 'yyyy-MM-dd hh:mm:ss') {
	if(times === undefined || times === null) console.error('formatTimes of the times is undefined');
	let timesType = Array.isArray(times); //判断是否是数组
	times = timesType ? times : [times];
	times.forEach((item, index, array) => {
		let _item = format;
		if(/^(\d{10}|\d{13})$/.test(item) && typeof item === 'string') item = Number(item);
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