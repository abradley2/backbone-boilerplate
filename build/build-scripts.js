var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    babelify = require('babelify'),
    jadeify = require('jadeify'),
    stringify = require('stringify'),
    glob = require('glob'),
    source = require('vinyl-source-stream'),
    eventStream = require('event-stream'),
    assign = require('lodash.assign'),
    uglify = require('uglifyify');

var nameRegex = /([\w]+)(?=\.main\.js$)/g;

function bundle(done){
  glob('./src/scripts/**/*.main.js', function(err, files){
    var streams = files.map(function(entry){
      return browserify({ entries: [entry]})
        .on('log', gutil.log)
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .transform(babelify)
        .transform(jadeify)
        .transform(stringify(['.html']))
        .transform({global: true}, uglify)
        .bundle()
        .pipe(source(entry.match(nameRegex)[0]))
        .pipe(rename({extname: '.bundle.js'}))
        .pipe(gulp.dest('./dist/scripts'));
    });
    return eventStream.merge(streams).on('end', done);
  });
}

module.exports = bundle;
