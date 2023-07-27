/*
 * @FileName: generateDateShortcuts
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-07-27 15:16:32
 * @Description: 根据数据生成日期快捷，element-ui el-date Shortcuts 专用
 */

import formatTimes from '../formatTimes/index.js';

/*
 * @description: 根据数据生成日期快捷，element-ui专用
 * @param {array} dateArray 根据数据生成日期快捷
 * @param {string} valueFormat 生成的时间类型
 * @return {array} 生成的日期快捷el-date Shortcuts的值
 */
export default function generateDateShortcuts(dateArray, valueFormat) {
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