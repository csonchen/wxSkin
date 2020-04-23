var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');

function stylusTask() {
  return gulp.src('./styl/*.styl')
             .pipe(stylus())
             .pipe(rename(function(path) {
               path.extname = '.wxss'
             }))
             .pipe(gulp.dest('./wxss'))
}

function autosTask() {
  gulp.watch('./styl/*.styl', stylusTask)
}

exports.default = gulp.series(gulp.parallel(stylusTask, autosTask))