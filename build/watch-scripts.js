var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    watchify = require('watchify'),
    babelify = require('babelify'),
    jadeify = require('jadeify'),
    stringify = require('stringify'),
    glob = require('glob'),
    source = require('vinyl-source-stream'),
    eventStream = require('event-stream'),
    assign = require('lodash.assign');

var nameRegex = /([\w]+)(?=\.main\.js$)/g;

function updateBundle(entry){
  return this.bundle()
    .on('error', gutil.log)
    .pipe(source(entry.match(nameRegex)[0]))
    .pipe(rename({extname: '.bundle.js'}))
    .pipe(gulp.dest('./dist/scripts'));
}

function getBundles(done){
  glob('./src/scripts/**/*.main.js', function(err, files){
    var streams = files.map(function(entry){
      var bundler = watchify(browserify({ entries: [entry], debug: true}));
      bundler.on('log', gutil.log)
        .transform(stringify(['.html']))
        .transform(jadeify)
        .transform(babelify)
        .transform(stringify)
        .on('update', updateBundle.bind(bundler,entry));
      return updateBundle.call(bundler,entry);
    });
    return eventStream.merge(streams).on('end', done);
  });
}

module.exports = getBundles;
