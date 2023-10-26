/*
 * @FileName: deepCopy
 * @FilePath: \configjs-utilsjs\packages\main\deepCopy\index.js
 * @Author: FYR
 * @Date: 2023-06-23 10:34:45
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-25 17:15:09
 * @Description: 深拷贝
 */

/*
 * @description: 深拷贝
 * @param {T} data 被拷贝值
 * @return {T} 拷贝出来的值
 */
export default function deepCopy(data) {
    const type = Object.prototype.toString.call(data);
    let value = null;

    switch (type) {
        case 'object Function':
            value = new Function('return '+ data.toString()).call(this);;
            break;
        case 'object Date':
            value = new Date(data.valueOf());
            break;
        case 'object Object':
        case 'object Array':
            value = type === 'object Array' ? [] : {};
            for (let key in data) {
                value[key] = deepCopy(data[key]);
            }
            break;
        default:
            value = data;
            break;
    }
    return value;
}
