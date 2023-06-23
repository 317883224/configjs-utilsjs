/*
 * @FileName: deepCopy
 * @FilePath: \configjs-utilsjs\packages\other\deepCopy\index.js
 * @Author: FYR
 * @Date: 2023-06-23 10:34:45
 * @LastEditors: FYR
 * @LastEditTime: 2023-06-23 11:42:40
 * @Description: 深拷贝
 */

/*
 * @name: 深拷贝
 * @param {any} data 被拷贝值
 * @return {any} 拷贝出来的值
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
