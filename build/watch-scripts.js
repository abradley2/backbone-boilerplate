var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    hbsfy = require('hbsfy'),
    stringify = require('stringify'),
    source = require('vinyl-source-stream')

function watchScripts () {

    var b = browserify({
        plugin: [watchify]
    })

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
    b.on('update', bundle)

    function bundle () {
        b.bundle()
            .pipe(source('app.js'))
            .pipe(gulp.dest('./public/js'))
    }

    bundle()

}

module.exports = watchScripts