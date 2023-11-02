/*
 * @FileName: isDate
 * @FilePath: \configjs-utilsjs\packages\main\isDate\index.ts
 * @Author: FYR
 * @Date: 2023-11-02 10:52:32
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-02 11:10:54
 * @Description: 判断日期是否合法
 */
/*
 * @description: 判断日期是否合法
 * @param {array} val 参数
 * @return {boolean} 判断结果
 */
export default function isDate(...val: any[]): boolean {
    return !Number.isNaN(new Date(...(val as [])).valueOf());
}