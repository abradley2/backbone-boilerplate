var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    gutil = require('gulp-util')

function buildStyles () {
    return gulp.src('./styles/main.styl')
        .pipe(stylus().on('error', gutil.log))
        .pipe(gulp.dest('./public/css'))
}

module.exports = buildStyles
