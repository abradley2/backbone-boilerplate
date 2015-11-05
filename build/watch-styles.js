var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util')
    rename = require('gulp-rename');

var nameRegex = /\.(main)$/g;

function watchStyles (){
  return gulp.src('./src/styles/**/*.main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(rename(function(path){
      path.basename = path.basename.replace(nameRegex, '.bundle');
    }))
    .pipe(gulp.dest('./dist/styles'));
}

module.exports = watchStyles;
