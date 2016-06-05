var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util')

function watchStyles () {

    return gulp.watch(['./styles/**/*.styl'], function () {

        return gulp.src('./styles/main.styl')
            .pipe(sourcemaps.init())
            .pipe(stylus().on('error', gutil.log))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./public/css'))
            
    })
}

module.exports = watchStyles;
