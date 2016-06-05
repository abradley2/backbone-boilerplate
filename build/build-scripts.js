var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    hbsfy = require('hbsfy'),
    stringify = require('stringify'),
    source = require('vinyl-source-stream')

function buildScripts () {

    var b = browserify()

    b.add('./src/app.js')

    b.transform(stringify, {
        appliesTo: {
            includeExtensions: ['md', 'html', 'txt']
        }
    })

    b.transform(hbsfy, {
        appliesTo: {
            includeExtensions: ['hbs', 'handlebars']
        }
    })

    b.on('log', gutil.log)


    b.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/js'))

}

module.exports = buildScripts