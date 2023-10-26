/*
 * @FileName: dictionarySort
 * @FilePath: \configjs-utilsjs\packages\main\dictionarySort\index.js
 * @Author: FYR
 * @Date: 2023-06-17 13:54:54
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-25 17:39:17
 * @Description: 字典排序
 */

/*
 * @description: 字典排序
 * @param {string[]} data 需要排序的值
 * @param {0|1} type 排序类型，0：默认 1：比默认多A-Z值
 * @return {string[]} 排序后的值
 */
export default function dictionarySort(data, type = 0) {
    const classificationCN = '阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀'.split(''); // 中文分类标签
    const classificationCNMapEN = 'ABCDEFGHJKLMNOPQRSTWXYZ'.split(''); // 中文映射到英文的分类标签
    const classificationEN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // 英文分类标签
    let values = [[], []]; // [英文分类，中文分类]

    data.forEach((item) => {
        values[/[A-z]+/gi.test(item) ? 0 : 1].push(item);
    });
    values.forEach((item, index) => {
        values[index] = [...values[index], ...(index ? classificationCN : classificationEN)].sort((a, b) => a.localeCompare(b));
    })

    classificationCN.forEach((item, index) => {
        const firstIndex = values[1].indexOf(item) + 1;
        const lastIndex = values[1].indexOf(classificationCN[index + 1]) - 1;
        const value = lastIndex < 0 ? values[1].slice(firstIndex) : values[1].slice(firstIndex, lastIndex + 1);

        if(value.length !== 0) {
            values[0].splice(values[0].indexOf(classificationCNMapEN[index]) + 1, 0, ...value);
        }
    });

    switch (Number(type)) {
        case 1:
            break;
        default:
            classificationEN.forEach(item => {
                values[0].splice(values[0].indexOf(item), 1);
            })
            values[0] = values[0];
            break;
    }

    return values[0];
}