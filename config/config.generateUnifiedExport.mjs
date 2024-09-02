/*
 * @FileName: config.generateUnifiedExport
 * @FilePath: \configjs-utilsjs\config\config.generateUnifiedExport.mjs
 * @Author: FYR
 * @Date: 2023-06-19 14:33:05
 * @LastEditors: FYR
 * @LastEditTime: 2024-09-02 11:08:42
 * @Description: 生成统一导出
 */

import { createWriteStream, readdirSync, statSync, readFileSync } from 'fs';
import { resolve } from 'path';

/*
 * @description: 生成统一导出
 */
function generateUnifiedExport() {
    generateFile('./packages/main');
}

/*
 * @description: 生成文件
 * @param {string} path 路径
 */
function generateFile(path) {
    const writerStream = createWriteStream(resolve(`${path}/index.ts`));
    const fileList = readdirSync(resolve(path));
    let content = '';
    let folders = [];

    fileList.forEach((file) => {
        const filePath = resolve(`${path}/${file}`);

        if (statSync(filePath).isDirectory()) {
            const description = readFileSync(resolve(`${path}/${file}/index.ts`), 'utf-8').match(/@Description: (.+)/)[1];

            content += `import ${file} from "./${file}/index"; // ${description}\n`;
            folders.push(file);
        }
    });

    content += `\nexport default {\n    ${folders.join(',\n    ')}\n};\n`;
    content += `\nexport {\n    ${folders.join(',\n    ')}\n};\n`;

    writerStream.write(content, 'utf-8');
    writerStream.end();
}

export { generateUnifiedExport };
