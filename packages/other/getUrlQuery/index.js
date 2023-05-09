/*
 * @FileName: getUrlQuery
 * @FilePath: \configjs-utilsjs\packages\other\getUrlQuery\index.js
 * @Author: FYR
 * @Date: 2023-05-09 13:53:46
 * @LastEditors: FYR
 * @LastEditTime: 2023-05-09 14:32:15
 * @Description: 获取网址的传值
 */

/*
 * @name: 获取网址的传值
 * @param {https|http} url 网址
 * @return {query} 路由的传值
 */
export default function getUrlQuery(url) {
    const urlSplit = url.split('?');
    const queryString = urlSplit[1];
    let values = {};

    if (queryString) {
        // `{"${location.href.split('?')[1]}"}`.replace(/=/g, '":"').replace(/&/g, '","').replace(/([{,])(\"[A-z0-9]+\")([},])/g, '$1$2:null$3');
        for (let item of queryString.split('&')) {
            const value = item.split('=');
            values[value[0]] = value[1];
        }
    }

    return values;
}
