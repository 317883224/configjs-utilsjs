const path = require('path');
const join = path.join;
const fs = require('fs');


function resolve(dir) {
    return path.resolve(__dirname, dir)
}

function getEntries(path) {
	let files = fs.readdirSync(resolve(path));
	const entries = files.reduce((ret, item) => {
		const itemPath = join(path, item)
		const isDir = fs.statSync(itemPath).isDirectory();
		if (isDir) {
			ret[item] = resolve(join(itemPath, 'index.js'))
		} else {
			const [name] = item.split('.')
			ret[name] = resolve(`${itemPath}`)
		}
		return ret
	}, {})
	return entries
}

module.exports = {
	// 修改 src 目录 为 examples 目录
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	outputDir: 'lib',
	chainWebpack: config => {
		config.module
			.rule('js')
			.include
			.add('/packages')
			.end()
			.use('babel')
			.loader('babel-loader')
			.tap(options => {
				// 修改它的选项...
				return options
			})
		config.optimization.delete('splitChunks');
		config.plugins.delete('copy');
		config.plugins.delete('html');
		config.plugins.delete('preload');
		config.plugins.delete('prefetch');
		config.plugins.delete('hmr');
		config.entryPoints.delete('app');
	},
	configureWebpack: {
		entry: {
			index: resolve('packages/index.js'),
			capitalize: resolve('packages/capitalize/index.js'),
			formatMoney: resolve('packages/formatMoney/index.js'),
		},
		output: {
			filename: '[name]/index.js',
			libraryTarget: 'commonjs2',
		}
	},
	css: { extract: false },
	productionSourceMap: false,
	lintOnSave: false,
}
