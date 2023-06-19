/*
 * @FileName: dictionaryClassification
 * @FilePath: \configjs-utilsjs\packages\other\dictionaryClassification\index.js
 * @Author: FYR
 * @Date: 2023-06-17 13:57:06
 * @LastEditors: FYR
 * @LastEditTime: 2023-06-19 13:42:15
 * @Description: 字典分类
 */

import dictionarySort from '../dictionarySort/index.js';

/*
 * @name: 字典分类
 * @param {string[]} data 需要分类的值
 * @return {{string: any[]}[]} 分类后的值
 */
export default function dictionaryClassification(data) {
    let values = []; // 内容
    const paginationTagsEN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const sortValue = dictionarySort(data, 1);

    paginationTagsEN.forEach((item, index) => {
        const firstIndex = sortValue.indexOf(item) + 1;
        const lastIndex = sortValue.indexOf(paginationTagsEN[index + 1]) - 1;
        const value = lastIndex < 0 ? sortValue.slice(firstIndex) : sortValue.slice(firstIndex, lastIndex + 1);

        values[paginationTagsEN[index]] = [...value];
    })

    return values;
}
