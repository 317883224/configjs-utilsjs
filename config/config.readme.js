/*
 * @FileName: 请输入该文件的名称
 * @FilePath: \configjs-utilsjs\config\config.readme.js
 * @Author: FYR
 * @Date: 2023-07-27 11:44:46
 * @LastEditors: FYR
 * @LastEditTime: 2024-11-07 16:15:31
 * @Description: 请输入该文件的描述
 */
import fs from 'fs';
import { resolve } from 'path';

class CCreadREADME {
    writeStream = fs.createWriteStream(resolve('./dist/README.md'));
    total = 0;
    fileUrls = [];
    data = {};

    constructor(fileUrls) {
        this.fileUrls = fileUrls;
        fileUrls.forEach((item) => {
            this.play(item);
        });
        this.allClose();
    }

    play(fileUrl) {
        const key = fileUrl.replace(/^.+\\([A-z0-9-]+)\\index\.ts$/, '$1');
        const fileContent = JSON.stringify(fs.readFileSync(fileUrl, 'utf-8'));
        let header = fileContent.match(/\/\*.+?\*\//g)[1].split(/\\r\\n/);
        let params = fileContent.replace(/\\r\\n/g, '').match(/export default function[^;]+\)\:\s/g);

        this.data[key] = {
            name: '',
            description: '',
            params: [],
            return: [],
            restrictions: '',
            paramsDefaultValue: {}
        };
        [...header, ...params].forEach((item) => {
            CCreadREADME.getFileCursorModeData(this.data[key], item);
        });
    }

    allClose() {
        let readmeTemplate = fs.readFileSync('./assets/readmeTemplate.md', 'utf-8');
        let updateLog = fs.readFileSync('./assets/changlog.md', 'utf-8');
        const markdownContent = Object.values(this.data)
            .filter((item) => item.name)
            .map((item) => CCreadREADME.getMarkdownContent(item))
            .join('');

        updateLog = updateLog.replace(/\s[A-z0-9-]+\s/g, (i) => {
            const item = this.data[i.trim()];

            if (item?.name) {
                return `[${item.name}](#${item.name})（${item.description}）`;
            } else {
                return i;
            }
        });
        readmeTemplate = readmeTemplate.replace(/<!-- 更新日志的标记 -->/, updateLog);
        readmeTemplate = readmeTemplate.replace(/<!-- 通过nodejs生成的文档的标记 -->/, markdownContent);
        this.writeStream.write(readmeTemplate, 'utf-8');
        this.writeStream.end();
    }

    static getFileCursorModeData(data, line) {
        let value = null;

        if ((value = line.match(/\* @(description|restrictions): (.*)/))) {
            data[value[1]] = value[2];
        } else if ((value = line.match(/\* @param\s{(.+)}\s(\S+)\s(.+)/))) {
            data.params.push([value[1], value[2], value[3]]);
        } else if ((value = line.match(/\* @return\s{(.+)}\s(.+)/))) {
            data.return = [value[1].replace(/([<>])/g, '\\$1'), value[2]];
        } else if ((value = line.match(/export\sdefault\sfunction\s([A-z0-9]+)(<.+>)?\((.*)\):\s/))) {
            const paramDefaultValue = value[3].split(/,\s+?/);

            data.name = value[1];
            paramDefaultValue.forEach((item) => {
                const value = item.split(/:.+=/);
                data.paramsDefaultValue[value[0].replace(/\s/g, '').split(/\?:|:/)[0]] = value[1];
            });
        }

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
            value.push(`| value | ${data.return[1]} | ${data.return[0].replace(/\|/g, ' / ')} |`);
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
            files.push(resolve(filePath, 'index.ts'));
        }
    });

    return files;
}
