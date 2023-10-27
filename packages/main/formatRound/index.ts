/*
 * @FileName: formatRound
 * @FilePath: \configjs-utilsjs\packages\main\formatRound\index.ts
 * @Author: FYR
 * @Date: 2023-04-21 11:06:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-26 16:34:43
 * @Description: 格式化数值为四舍五入
 */

/*
 * @description: 四舍五入
 * @param {string|number} value 需要四舍五入值
 * @param {number} decimalPlaces 数值保留小数位
 * @return {string} 转换后的字符串
 */
export default function formatRound(value: string | number, decimalPlaces: number = 0): string {
    if (isNaN(Number(value))) return String(value);
    let valueArray = String(value).split('.'); // 根据小数点切分数据

    if (!valueArray[1]) valueArray[1] = '';
    if (decimalPlaces === 0) {
        return String(Math.round(value as number));
    } else if (decimalPlaces > 0) {
        const difference = decimalPlaces - valueArray[1].length; // 需要填充的值的个数

        if (difference >= 0) {
            valueArray[1] = (valueArray[1] as any).padEnd(decimalPlaces, '0');
        } else {
            valueArray[1] = valueArray[1] ? String(Math.round(Number(valueArray[1]) * Math.pow(10, difference))) : '';
        }
    }

    if (!valueArray[1]) valueArray.splice(1, 1);

    return valueArray.join('.');
}
