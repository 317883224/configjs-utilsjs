// packages / index.js

// 导入单个组件
import appendLink from './appendLink/index.js'
import appendScript from './appendScript/index.js'
import capitalize from './capitalize/index.js'
import formatMoney from './formatMoney/index.js'
import formatStringDateTimes from './formatStringDateTimes/index.js'
import formatTimes from './formatTimes/index.js'
import generateDateShortcuts from './generateDateShortcuts/index.js';
import generateDateTimes from './generateDateTimes/index.js';
import {
	setUnicode,
	getUnicode,
} from './unicode/index.js';

// 以数组的结构保存组件，便于遍历
const components = [
]
// 方法
const fun = {
	appendLink,
	appendScript,
	capitalize,
	formatMoney,
	formatStringDateTimes,
	formatTimes,
	generateDateShortcuts,
	generateDateTimes,
	setUnicode,
	getUnicode,
}

// 定义 install 方法
const install = function (Vue) {
    if (install.installed) return
    install.installed = true
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
    })
	// 便利并注册方法
	Vue.prototype.$configjsutilsjs = fun;
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default Object.assign({
    // 导出的对象必须具备一个 install 方法
    install,
	// 方法
    // 组件列表
    ...components
}, fun)