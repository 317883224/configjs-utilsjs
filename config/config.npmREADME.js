/*
 * @FileName: 请输入该文件的名称
 * @FilePath: \configjs-utilsjs\config\config.npmREADME.js
 * @Author: FYR
 * @Date: 2023-07-27 11:44:46
 * @LastEditors: FYR
 * @LastEditTime: 2023-07-27 15:01:47
 * @Description: 请输入该文件的描述
 */

const fs = require('fs');
const readline = require('readline');
const { resolve } = require('path');

class CCreadREADME {
    writeStream = fs.createWriteStream(resolve('./dist/README.md'));
    total = 0;
    fileUrls = [];
    data = {};
    markdownContent = '';

    constructor(fileUrls) {
        this.fileUrls = fileUrls;
        fileUrls.forEach((item) => {
            this.play(item);
        });
    }

    play(fileUrl) {
        const rl = readline.createInterface({
            input: fs.createReadStream(fileUrl),
            output: process.stdout,
            terminal: false
        });
        this.data[fileUrl] = {
            key: fileUrl,
            value: {
                name: '',
                description: '',
                params: [],
                return: [],
                restrictions: '',
                paramsDefaultValue: {}
            }
        };
        rl.on('line', (line) => this.rlLine(line, fileUrl));
        rl.on('close', () => this.rlClose(fileUrl));
    }

    rlLine(line, fileUrl) {
        this.data[fileUrl].value = CCreadREADME.getFileCursorModeData(this.data[fileUrl].value, line);
    }

    rlClose(fileUrl) {
        this.markdownContent += CCreadREADME.getMarkdownContent(this.data[fileUrl].value);
        this.total += 1;
        if (this.total === this.fileUrls.length) {
            this.writeStream.write(
                fs
                    .readFileSync('./NPM.README.md', 'utf-8')
                    .replace(/<!-- 通过nodejs生成的文档的标记 -->/g, this.markdownContent),
                'utf-8'
            );
            this.writeStream.end();
        }
    }

    static getFileCursorModeData(data, line) {
        line.replace(/\* @(name|description|restrictions): (.*)/, (value, val1, val2) => {
            data[val1 === 'name' ? 'description' : val1] = val2;
        });
        line.replace(/\* @(param) (.+)/, (value, val1, val2) => {
            const [a, b, ...c] = val2.split(' ');
            data.params.push([a, b, c.join(' ')]);
        });
        line.replace(/\* @(return) (.+)/, (value, val1, val2) => {
            const [a, ...b] = val2.split(' ');
            data.return = [a, b.join(' ')];
        });
        line.replace(/function (.+)\((.+)\)/, (value, val1, val2) => {
            const paramDefaultValue = val2.split(',');
            data.name = val1;
            paramDefaultValue.forEach((item) => {
                const value = item.split('=');
                data.paramsDefaultValue[value[0].trim()] = value[1];
            });
        });
        return data;
    }

    static getMarkdownContent(data) {
        let value = [];

        value.push('');
        value.push(`<a id="${data.name}"></a>`);
        value.push(`### ${data.name}（${data.description}）`);
        if (data.params.length !== 0) {
            value.push(`#### 属性 attr`);
            value.push(`| 参数 | 说明 | 类型 | 可选值 | 默认值 |`);
            value.push(`| :----: | :----: | :----: | :----: | :----: |`);
            for (let item of data.params) {
                value.push(
                    `| ${item[1]} | ${item[2]} | ${item[0].replace(/\|/g, ' / ').replace(/^{(.+)}$/, '$1')} | ${
                        item[2].split('可选值为')[1] || '—'
                    } | ${data.paramsDefaultValue[item[1]] || '—'} |`
                );
            }
            value.push('');
        }
        if (data.return.length !== 0) {
            value.push(`#### 返回 return`);
            value.push(`| 参数 | 说明 | 类型 |`);
            value.push(`| :---: | :---: | :---: |`);
            value.push(
                `| value | ${data.return[1]} | ${data.return[0].replace(/\|/g, ' / ').replace(/^{(.+)}$/, '$1')} |`
            );
            value.push('');
        }
        value.push(`<p style="width: 100%; height: 1px; background-color: #e4e7ed; margin-top: 28px;"></p>\n`);
        return value.join('\n');
    }
}

new CCreadREADME(generateUnifiedExport('./packages/main'));

/*
 * @name: 生成统一导出
 * @param {string} path 路径
 */
function generateUnifiedExport(path) {
    const fileList = fs.readdirSync(resolve(path));
    let files = [];

    fileList.forEach((file) => {
        const filePath = resolve(`${path}/${file}`);

        if (fs.statSync(filePath).isDirectory()) {
            files.push(resolve(filePath, 'index.js'));
        }
    });

    return files;
}
