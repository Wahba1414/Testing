var gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  util = require('gulp-util');

// default
function mocha_watch(cb) {
  gulp.watch(['./**/*.js'], mocha_test);
  cb();
}
// Run Mocha Test
function mocha_test(cb) {
  gulp.src(['./test/**/*.js'],
    { read: false })
    .pipe(mocha({ reporter: 'list' }))
    .on('error', util.log);
  cb();
}
exports.default = gulp.series(mocha_test, mocha_watch);