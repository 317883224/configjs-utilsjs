/*
 * @FileName: rgbToGrayscale
 * @FilePath: \configjs-utilsjs\packages\main\rgbToGrayscale\index.ts
 * @Author: FYR
 * @Date: 2023-12-19 17:16:42
 * @LastEditors: FYR
 * @LastEditTime: 2023-12-19 17:41:09
 * @Description: 获取 RGB 格式颜色的灰度
 */
/**
 * @description: 获取 RGB 格式颜色的灰度
 * @param {number} r RGB中的R
 * @param {number} g RGB中的G
 * @param {number} b RGB中的B
 * @return {number} 灰度。0-63: 深灰色到黑色，64-127: 暗灰色，128-191: 浅灰色，192-255: 亮灰色到白色
 */
export default function rgbToGrayscale(r: number, g: number, b: number): number {
    return (r * 19595 + g * 38469 + b * 7472) >> 16;
}
