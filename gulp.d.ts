// gulp.d.ts
declare module 'gulp-jshint' {
    import gulp = require('gulp');
    function jshint(): gulp.Plugin;
    export = jshint;
}

declare module 'gulp-remove-logging' {
    import gulp = require('gulp');
    function removeLogging(): gulp.Plugin;
    export = removeLogging;
}
