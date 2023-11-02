/*
 * @FileName: isDarkMode
 * @FilePath: \configjs-utilsjs\packages\main\isDarkMode\index.ts
 * @Author: FYR
 * @Date: 2023-05-09 14:12:04
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-02 11:19:08
 * @Description: 判断设置主题是否为黑暗模式
 */

/*
 * @description: 判断设置主题是否为黑暗模式
 * @return {boolean} 判断结果
 */
export default function isDarkMode(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
