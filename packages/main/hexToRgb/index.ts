/*
 * @FileName: hexToRgb
 * @FilePath: \configjs-utilsjs\packages\main\hexToRgb\index.ts
 * @Author: FYR
 * @Date: 2023-12-19 17:19:53
 * @LastEditors: FYR
 * @LastEditTime: 2023-12-19 17:21:28
 * @Description: HEX格式转RGB
 */
type TReturn = {r: number, g: number, b: number};

/**
 * @description: HEX 转 RGB
 * @param {string} hex HEX格式的颜色值
 * @return {TReturn} RGB对象
 */
export default function hexToRgb(hex: string): TReturn {
    const CLEAN_HEX: string = hex.replace('#', '');
    const R: number = parseInt(CLEAN_HEX.substring(0, 2), 16);
    const G: number = parseInt(CLEAN_HEX.substring(2, 4), 16);
    const B: number = parseInt(CLEAN_HEX.substring(4, 6), 16);

    return { r: R, g: G, b: B };
}
