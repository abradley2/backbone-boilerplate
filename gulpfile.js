var gulp = require('gulp'),
    buildStyles = require('./build/build-styles'),
    watchStyles = require('./build/watch-styles'),
    buildScripts = require('./build/build-scripts'),
    watchScripts = require('./build/watch-scripts')

gulp.task(
    'build-styles',
    buildStyles
)

gulp.task(
    'watch-styles',
    ['build-styles'],
    watchStyles
)

gulp.task(
    'watch-scripts',
    watchScripts
)

gulp.task(
    'build-scripts',
    buildScripts
)

gulp.task(
    'watch',
    ['watch-styles', 'watch-scripts']
)

gulp.task(
    'build',
    ['build-styles', 'build-scripts']
)

gulp.task(
    'default',
    ['build']
)
