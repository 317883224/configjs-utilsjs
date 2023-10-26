/*
 * @FileName: appendScript
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-25 17:13:30
 * @Description: body 添加 js 标签
 */

/*
 * @description: body 添加 js 标签
 * @param {string|string[]} files 添加的链接/链接列表
 * @return {PromiseConstructor} 添加结果
 */
export default function appendScript(files) {
    return Promise.all(
        (Array.isArray(files) ? files : [files]).map((file) => {
            return new Promise((resolve, reject) => {
                let s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = file;
                s.addEventListener('load', () => resolve(), false);
                s.addEventListener('error', (err) => reject(err), false);
                document.head.appendChild(s);
            });
        })
    );
}
