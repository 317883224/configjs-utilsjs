/*
 * @FileName: formatTimes
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2024-11-07 16:41:55
 * @Description: 时间转换
 */

type TimeValue = Date | number | string;
type FormatTimesReturn = number | string;

/*
 * @description: 时间转换
 * @param {Date[]|number[]|string[]|Date|number|string} times 时间
 * @param {string} format 时间转换类型，具体写法看[详情](#formatTimes-foramt)
 * @return {string[]|string|number[]|number} 转换后的数据
 */
export default function formatTimes(times: undefined, format?: string): undefined;
export default function formatTimes(times: TimeValue, format?: string): FormatTimesReturn;
export default function formatTimes(times: TimeValue[], format?: string): FormatTimesReturn[];
export default function formatTimes(
    value: TimeValue | TimeValue[] | undefined,
    format: string = 'yyyy-MM-dd hh:mm:ss'
): FormatTimesReturn | FormatTimesReturn[] | undefined {
    if (!value) return value;
    let timesType = Array.isArray(value); //判断是否是数组
    let values: FormatTimesReturn[] = [];

    value = (timesType ? value : [value]) as TimeValue[];
    value.forEach((item, index) => {
        let _item = format;
        if (/^(\d{10}|\d{13})$/.test(String(item)) && typeof item === 'string') item = Number(item);
        item = new Date(item);
        const o: { [index: string]: number } = {
            'M+': item.getMonth() + 1, //月份
            'd+': item.getDate(), //日
            'h+': item.getHours(), //小时
            'm+': item.getMinutes(), //分
            's+': item.getSeconds(), //秒
            'q+': Math.floor((item.getMonth() + 3) / 3), //季度
            S: item.getMilliseconds(), //毫秒
            t: item.getTime(), //时间戳
            w: item.getDay() //星期
        };

        if (/(y+)/.test(_item)) {
            _item = _item.replace(RegExp.$1, (item.getFullYear() + '').substr(4 - RegExp.$1.length));
        }

        for (let k in o) {
            if (new RegExp('(' + k + ')').test(_item)) {
                _item = _item.replace(
                    RegExp.$1,
                    RegExp.$1.length == 1 ? String(o[k]) : ('00' + o[k]).substr(('' + o[k]).length)
                );
            }
        }
        values[index] = format === 't' ? Number(_item) : _item;
    });
    return timesType ? values : values[0];
}
