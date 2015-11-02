var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    gutil = require('gulp-util');

function buildStyles (){
  return gulp.src('./src/styles/main.scss')
    .pipe(sass().on('error', gutil.log))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/styles'));
}

module.exports = buildStyles;
