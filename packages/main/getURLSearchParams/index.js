/*
 * @FileName: getURLSearchParams
 * @FilePath: \configjs-utilsjs\packages\main\getURLSearchParams\index.js
 * @Author: FYR
 * @Date: 2023-07-25 17:41:16
 * @LastEditors: FYR
 * @LastEditTime: 2023-07-26 13:52:19
 * @Description: 获取网址的参数，调用web api的方法
 */

/*
 * @name: 获取网址的参数，调用web api的方法
 * @param {url|objectString} value 网址或者网址参数的字符串
 * @return {query} 网址的参数
 * @restrictions: 无法获取参数中数组的值，数组会覆盖取值，如 ?a=1&a=3&a=2 取值 {a: 2}
 */
export default function getURLSearchParams(value) {
    try {
        const urlSearch = !/^http/.test(value) ? value : new URL(value).search;
        const searchParams = new URLSearchParams(urlSearch);

        return Object.fromEntries(searchParams.entries());
    } catch (error) {
        console.error(error);
        return {};
    }
}
