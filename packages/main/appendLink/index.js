/*
 * @FileName: appendLink
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-17 16:46:26
 * @Description: body 添加 link 标签
 */

/*
 * @description: body 添加 link 标签
 * @param {string|string[]} files 添加的链接/链接列表
 * @return {PromiseConstructor} 添加结果
 */
export default function appendLink(files) {
    return Promise.all(
        (Array.isArray(files) ? files : [files]).map((file) => {
            return new Promise((resolve, reject) => {
                let link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = file;
                link.addEventListener('load', () => resolve(), false);
                link.addEventListener('error', (err) => reject(err), false);
                document.head.appendChild(link);
            });
        })
    );
}
