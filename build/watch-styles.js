var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util')
    rename = require('gulp-rename'),
    config = require('../config.js');

var nameRegex = /\.(main)$/g;

function watchStyles (){
  return gulp.src('./src/styles/**/*.main.*')
    .pipe(sourcemaps.init())
    .pipe(config.gulpCSSPreprocessor)
    .pipe(sourcemaps.write())
    .pipe(rename(function(path){
      path.basename = path.basename.replace(nameRegex, '.bundle');
    }))
    .pipe(gulp.dest('./dist/styles'));
}

module.exports = watchStyles;
