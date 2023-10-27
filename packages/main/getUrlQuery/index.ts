/*
 * @FileName: getUrlQuery
 * @FilePath: \configjs-utilsjs\packages\main\getUrlQuery\index.ts
 * @Author: FYR
 * @Date: 2023-05-09 13:53:46
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-26 17:40:41
 * @Description: 获取网址的参数
 */

interface IReturn {
    [index: string]: string | string[];
}

/*
 * @description: 获取网址的参数
 * @param {string} url 网址
 * @return {{ [index: string]: string | string[] }} 网址的参数
 */
export default function getUrlQuery(url: string): IReturn {
    const urlSplit = url.split('?');
    const queryString = urlSplit[1];
    let values: IReturn = {};

    if (queryString) {
        // `{"${location.href.split('?')[1]}"}`.replace(/=/g, '":"').replace(/&/g, '","').replace(/([{,])(\"[A-z0-9]+\")([},])/g, '$1$2:null$3');
        for (let item of queryString.split('&')) {
            const value = item.split('=');
            if (!values[value[0]]) {
                values[value[0]] = value[1];
            } else {
                values[value[0]] = [...values[value[0]], value[1]];
            }
        }
    }

    return values;
}
