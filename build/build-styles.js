var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    config = require('../config.js');

var nameRegex = /\.(main)$/g;

function buildStyles (){
  return gulp.src('./src/styles/**/*.*')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(function(path){
      path.basename = path.basename.replace(nameRegex, '.bundle');
    }))
    .pipe(gulp.dest(config.distOptions.stylesDistFolder));
}

module.exports = buildStyles;
