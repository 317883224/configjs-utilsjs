/*
 * @FileName: getURLSearchParams
 * @FilePath: \configjs-utilsjs\packages\main\getURLSearchParams\index.ts
 * @Author: FYR
 * @Date: 2023-07-25 17:41:16
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-26 17:38:57
 * @Description: 获取网址的参数，该方法调用 web api > URLSearchParams 方法
 */

interface IReturn {
    [index: string]: string | string[];
}

/*
 * @description: 获取网址的参数，该方法调用 WEB API > URLSearchParams 方法
 * @param {string} value 网址或者网址参数的字符串，如 "http://localhost:8080?a=1" 或者 "?a=1&a=3&a=2"
 * @return {{ [index: string]: string | string[] }} 网址的参数
 * @restrictions: 无法获取参数中数组的值，数组会覆盖取值，如 ?a=1&a=3&a=2 取值 {a: 2}
 */
export default function getURLSearchParams(value: string): IReturn {
    try {
        const urlSearch = /^http/.test(value) ? new URL(value).search : value;
        const searchParams = new URLSearchParams(urlSearch);

        return (Object as any).fromEntries(searchParams.entries());
    } catch (error) {
        console.error(error);
        return {};
    }
}
