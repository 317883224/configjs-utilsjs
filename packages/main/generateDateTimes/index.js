/*
 * @FileName: generateDateTimes
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-07-28 14:07:16
 * @Description: 根据开始结束时间生成连续的时间数组
 */

import formatTimes from '../formatTimes/index.js';

/*
 * @description: 根据开始结束时间生成连续的时间数组
 * @param {date} startTime 开始时间
 * @param {date} endTime 结束时间
 * @param {string} type 根据时间中的值来生成数组，具体区别看[详情](#generateDateTimes-type)，可选值为y,M,d
 * @param {string} format 时间转换类型，具体写法看[详情](#formatTimes-foramt)
 * @return {formatValue[]} 转换后的数据
 */
export default function generateDateTimes(startTime, endTime, type = 'd', format) {
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