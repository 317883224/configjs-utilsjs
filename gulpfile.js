/*
 * @FileName: gulpfile
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-07-27 17:58:27
 * @Description: gulp配置文件
 */

var gulp = require('gulp');
var clean = require("gulp-clean"); // 清理之前文件和文件夹
var jshint = require('gulp-jshint'); // js检测
var uglify = require("gulp-uglify"); // 压缩js
var stripDebug = require("gulp-remove-logging"); // 移除console语句
var notify = require('gulp-notify'); // 提示信息
var connect = require('gulp-connect');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var { exec } = require('child_process');

const env = process.argv.includes('serve') ? 'serve' : 'build'; // 当前环境 serve：本地环境 build：打包环境
const convertFolder = env === 'serve' ? 'serve' : 'dist'; // 转换文件夹

/*
 * 本地调试环境local
 */
gulp.task('serve', function (cb) {
	connect.server({
		root: convertFolder,
		port: 10000,
		livereload: true,
	});

	watch('packages/**/*.html', gulp.series('html'));
	watch(['packages/**/*.js', '!packages/main/index.js'], gulp.series('js', 'generateUnifiedExport'));
	cb();
});

/**
 * 处理 html 文件
*/
gulp.task('html', function () {
	gutil.log('开始处理 html');

	return gulp.src('./packages/**/*.html')
		.pipe(gulp.dest(convertFolder))
		.pipe(connect.reload())
});


/*
 * 处理 js 文件
 */
gulp.task('js', gulp.series(function () {
	gutil.log('开始处理 js');

	return gulp.src(env === 'serve' ? ['packages/**/*.js'] : ['packages/**/*.js'])
		.pipe(
			uglify({
				mangle: true, //类型：Boolean 默认：true 是否修改变量名
				compress: false, //类型：Boolean 默认：true 是否完全压缩
				//preserveComments: all //保留所有注释
			})
		)
		.pipe(stripDebug({
			methods: env === 'serve' ? [] : ['log']
		}))
		.pipe(gulp.dest(convertFolder))
		.pipe(connect.reload())
}))

/**
 * 清空目标目录
 */
gulp.task('clean', function () {
	return gulp.src(convertFolder, {
		allowEmpty: true
	}).pipe(clean())
})

/*
 * 检测
 */
gulp.task('jshint', function () {
	gutil.log('开始检测');

	return gulp.src('./packages/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'))
});

gulp.task('generateUnifiedExport', function(cb) {
	gutil.log('开始处理 生成统一导出js');
	exec('node ./config/config.generateUnifiedExport.js');
	cb();
})

gulp.task('npm', function(cb) {
	gutil.log('开始生成 npm/package.json');
	exec('node ./config/config.npm.js');
	cb();
})

gulp.task('readme', function(cb) {
	gutil.log('开始生成 README');
	exec('node ./config/config.readme.js');
	cb();
})

/**
 * 使用 gulp.task('default') 定义默认任务
 * 在命令行使用 gulp 启动 script 任务和 auto 任务
 */
gulp.task('serve', gulp.series('clean', 'html', 'generateUnifiedExport', 'js', 'serve'))
gulp.task('build', gulp.series('clean', 'generateUnifiedExport', 'js', 'npm', 'readme'))