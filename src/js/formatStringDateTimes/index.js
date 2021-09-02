import {
	formatTimes,
} from '../formatTimes';

/******************************** 根据传进的数组字符串或者字符串生成相应的时间 **********************************
 * 
 ************属性 attr
 * 	参数			            说明							类型				        可选值		        默认值
 * 	dateTimesArray 			需要转换的数据			date array			    --			        -
 * 	format 			        时间转换类型					string				    同时间转换方法		new Date()
 *****************************/
function formatStringDateTimes(dateTimesArray, format) {
	let _dateTimesArray = Array.isArray(dateTimesArray) ? dateTimesArray : [dateTimesArray].map((item) => {
		return new Date(...item.replace(/\D/g, ',').split(','));
	})
	dateTimesArray = Array.isArray(dateTimesArray) ? _dateTimesArray : _dateTimesArray[0];
	return format ? formatTimes(dateTimesArray, format) : dateTimesArray;
}

export default {
	formatStringDateTimes,
}