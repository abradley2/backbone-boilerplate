var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename');

var nameRegex = /\.(main)$/g;

function buildStyles (){
  return gulp.src('./src/styles/**/*.main.scss')
    .pipe(sass().on('error', gutil.log))
    .pipe(minifyCss())
    .pipe(rename(function(path){
      path.basename = path.basename.replace(nameRegex, '.bundle');
    }))
    .pipe(gulp.dest('./dist/styles'));
}

module.exports = buildStyles;
