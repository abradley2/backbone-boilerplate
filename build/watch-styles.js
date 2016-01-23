var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util')
    config = require('../config.js');


function watchStyles (){
  return gulp.src('./src/styles/**/*')
    .pipe(sourcemaps.init())
    .pipe(stylus().on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/styles'));
}

module.exports = watchStyles;
