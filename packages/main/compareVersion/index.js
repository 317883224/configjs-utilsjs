/*
 * @FileName: compareVersion
 * @Author: FYR
 * @Date: 2022-05-12 10:38:14
 * @LastEditors: FYR
 * @LastEditTime: 2023-07-27 14:35:00
 * @Description: 版本比较
 */

/*
 * @description: 版本比较
 * @param {string} v1 被比较的版本1
 * @param {string} v2 被比较的版本1
 * @param {string} separators 版本号分隔符
 * @return {number} 返回值 0: v2 > v1 1:v1 > v2 2: v1 = v2
 */
export default function compareVersion(v1, v2, separators = '.') {
  let verson1 = v1.split(separators);
  let verson2 = v2.split(separators);
  const len = Math.max(v1.length, v2.length);

  while (verson1.length < len) {
    verson1.push('0');
  }

  while (verson2.length < len) {
    verson2.push('0');
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(verson1[i])
    const num2 = parseInt(verson2[i])

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return 0;
    }
  }

  return 2;
}