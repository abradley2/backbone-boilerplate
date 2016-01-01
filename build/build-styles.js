var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-cssnano'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    config = require('../config.js');

var nameRegex = /\.(main)$/g;

function buildStyles (){
  return gulp.src('./src/styles/**/*.*')
    .pipe(config.gulpCSSPreprocessor)
    .pipe(minifyCss())
    .pipe(rename(function(path){
      path.basename = path.basename.replace(nameRegex, '.bundle');
    }))
    .pipe(gulp.dest(config.distOptions.stylesDistFolder));
}

module.exports = buildStyles;
