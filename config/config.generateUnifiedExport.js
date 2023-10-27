/*
 * @FileName: config.generateUnifiedExport
 * @FilePath: \configjs-utilsjs\config\config.generateUnifiedExport.js
 * @Author: FYR
 * @Date: 2023-06-19 14:33:05
 * @LastEditors: FYR
 * @LastEditTime: 2023-10-27 14:51:47
 * @Description: 生成统一导出
 */

const fs = require('fs');
const { resolve } = require('path');

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
    const writerStream = fs.createWriteStream(resolve(`${path}/index.ts`));
    const fileList = fs.readdirSync(resolve(path));
    let content = '';
    let folders = [];

    fileList.forEach((file) => {
        const filePath = resolve(`${path}/${file}`);

        if (fs.statSync(filePath).isDirectory()) {
            content += `import ${file} from "./${file}/index";\n`;
            folders.push(file);
        }
    });

    content += `\nexport default {\n    ${folders.join(',\n    ')}\n};\n`;
    content += `\nexport {\n    ${folders.join(',\n    ')}\n};\n`;

    writerStream.write(content, 'utf-8');
    writerStream.end();
}

module.exports = { generateUnifiedExport };
