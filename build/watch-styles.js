var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util');

function watchStyles (){
  return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/styles'));
}

module.exports = watchStyles;
