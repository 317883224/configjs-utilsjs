/*
 * @FileName: isDarkMode
 * @FilePath: \configjs-utilsjs\packages\other\a\index.js
 * @Author: FYR
 * @Date: 2023-05-09 14:12:04
 * @LastEditors: FYR
 * @LastEditTime: 2023-05-09 14:13:37
 * @Description: 判断设置主题是否为黑暗模式
 */

/*
 * @description: 判断设置主题是否为黑暗模式
 * @return {boolean} 判断结果
 */
export default function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}
