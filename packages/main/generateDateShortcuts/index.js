/*
 * @FileName: generateDateShortcuts
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-04-21 15:37:01
 * @Description: 根据数据生成日期快捷 el-date Shortcuts用
 */

/******************************** 根据数据生成日期快捷 el-date Shortcuts用 **********************************
 *
 ************属性 attr
 * 	参数			        说明					类型					可选值				默认值
 * 	dateArray 			根据数据生成日期快捷			array					--					-
 * 	valueFormat 		生成的时间类型 				string					--					-
 *
 * ************dateArray item
 * 	参数			    说明							类型				        可选值		        默认值
 * 	text 			名称			                string  			    --			        -
 *  y 				距离当前年限					string number           --                  --
 * 	M 				距离当前月限					string number           --                  --
 * 	d 				距离当前日限					string number           --                  --
 *****************************/
import formatTimes from '../formatTimes/index.js';


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