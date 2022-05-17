/*
 * @FileName: compareVersion
 * @Author: FYR
 * @Date: 2022-05-12 10:38:14
 * @LastEditors: FYR
 * @LastEditTime: 2022-05-17 14:42:57
 * @Description: 版本比较
 */

/******************************** 版本比较 **********************************
 * 
 ************属性 attr
 * 	参数			    说明						    类型				    可选值		            默认值
 *	v1 			      被比较的版本1				string			    --			            --
 * 	v2 			      被比较的版本1				string				  --			            --
 * 	separators 		分隔符					    string				  --			            .
 * 
 ************返回值 return
 * 	参数			      类型              说明
 *  value           number            返回值 0: v2 > v1 1:v1 > v2 2: v1 = v2
 * 
 *****************************/

export function compareVersion(v1, v2, separators = '.') {
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