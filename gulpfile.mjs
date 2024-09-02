/*
 * @FileName: gulpfile
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2024-09-02 11:46:15
 * @Description: gulp配置文件
 */
import gulp from 'gulp';
import { deleteAsync } from 'del';
import jshint from 'gulp-jshint'; // js检测
import uglify from 'gulp-uglify'; // 压缩js
import stripDebug from 'gulp-remove-logging'; // 移除console语句
import connect from 'gulp-connect';
import log from 'fancy-log';
import watch from 'gulp-watch';
import replace from 'gulp-replace';
import { exec } from 'child_process';
import ts from 'gulp-typescript';
import { generateUnifiedExport } from './config/config.generateUnifiedExport.mjs';
import portfinder from 'portfinder';

const env = process.argv.includes('serve') ? 'serve' : 'build'; // 当前环境 serve：本地环境 build：打包环境
const convertFolder = env === 'serve' ? 'serve' : 'dist'; // 转换文件夹
let port = 10000; // 端口

/*
 * 本地调试环境local
 */
gulp.task('serve', function (cb) {
    portfinder.basePort = port; // 设置起始端口
    portfinder.getPort((err, port) => {
        if (err) {
            cb(err);
        }
        connect.server({
            root: './',
            port,
            livereload: true
        });
        cb();
    });
});

/*
 * 监听文件改变
 */
gulp.task('watch', function (cb) {
    watch('./**/*.html', gulp.series('html'));
    watch(['packages/**/*.ts', '!packages/main/index.ts'], gulp.series('generateUnifiedExport', 'ts', 'js'));
    cb();
});

/**
 * 处理 html 文件
 */
gulp.task('html', function () {
    log('开始处理 html');

    return gulp.src('./**/*.html').pipe(connect.reload());
});

/*
 * 处理 ts 文件
 */
gulp.task(
    'ts',
    gulp.series(function () {
        log('开始处理 ts');

        return gulp
            .src(env === 'serve' ? ['packages/**/*.ts'] : ['packages/**/*.ts'])
            .pipe(ts.createProject('./tsconfig.json')())
            .pipe(gulp.dest(convertFolder))
            .pipe(connect.reload());
    })
);

/*
 * 处理 js 文件
 */
gulp.task(
    'js',
    gulp.series(function () {
        log('开始处理 js');
        return gulp
            .src([`${convertFolder}/**/*.js`])
            .pipe(replace(/(['"]\.{1,2}[/A-z0-9]+\/)(index)(['"]\;)/g, '$1index.js$3'))
            .pipe(
                stripDebug({
                    methods: env === 'serve' ? [] : ['log']
                })
            )
            .pipe(
                uglify({
                    mangle: true, //类型：Boolean 默认：true 是否修改变量名
                    compress: false //类型：Boolean 默认：true 是否完全压缩
                    //preserveComments: all //保留所有注释
                })
            )
            .pipe(gulp.dest(convertFolder));
    })
);

/**
 * 清空目标目录
 */
gulp.task('clean', function () {
    return deleteAsync([convertFolder]);
});

/*
 * 检测
 */
gulp.task('jshint', function () {
    log('开始检测');

    return gulp.src('./packages/**/*.ts').pipe(jshint()).pipe(jshint.reporter('default')).pipe(jshint.reporter('fail'));
});

gulp.task('generateUnifiedExport', function (cb) {
    log('开始处理 生成统一导出js');
    generateUnifiedExport();
    cb();
});

gulp.task('npm', function (cb) {
    log('开始生成 npm/package.json');
    exec('node ./config/config.npm.js');
    cb();
});

gulp.task('readme', function (cb) {
    log('开始生成 README');
    exec('node ./config/config.readme.js');
    cb();
});

gulp.task('buildEnd', function (cb) {
    log('打包完成');
    cb();
});

/**
 * 使用 gulp.task('default') 定义默认任务
 * 在命令行使用 gulp 启动 script 任务和 auto 任务
 */
gulp.task('serve', gulp.series('clean', 'html', 'generateUnifiedExport', 'ts', 'js', 'watch', 'serve'));
gulp.task('build', gulp.series('clean', 'generateUnifiedExport', 'ts', 'js', 'npm', 'readme', 'buildEnd'));
