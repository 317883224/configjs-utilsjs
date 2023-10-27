/*
 * @FileName: deepCopy
 * @FilePath: \configjs-utilsjs\packages\main\deepCopy\index.ts
 * @Author: FYR
 * @Date: 2023-06-23 10:34:45
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-26 16:05:59
 * @Description: 深拷贝
 */

/*
 * @description: 深拷贝
 * @param {T} data 被拷贝值
 * @return {T} 拷贝出来的值
 */
export default function deepCopy<T>(data: T): T {
    const type = Object.prototype.toString.call(data);
    let value = null;

    switch (type) {
        case 'object Function':
            value = new Function('return ' + (data as Function).toString()).call(deepCopy);
            break;
        case 'object Date':
            value = new Date((data as Date).valueOf());
            break;
        case 'object Object':
        case 'object Array':
            value = (type === 'object Array' ? [] : {}) as any;
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
