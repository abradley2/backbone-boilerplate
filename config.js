/** DIST OPTIONS **/

/*
 *  These options specify gulp output paramters,
 *  namely the dist folder gulp should dump
 *  everything to. By default it is the local
 *  ./dist folder. You may probably wish to change
 *  this to the static/public directory of your sever.
 */

exports.distOptions = {

  'scriptsDistFolder': './dist/scripts',

  'stylesDistFolder': './dist/styles'

};


/** BROWSERIFY OPTIONS **/

/*
 *  You can require browserify transforms here
 *  this function will pass the browserify bundler
 *  and the environment ('dev' corresponds to 'watch'
 *  tasks and 'prod' corresponds to 'build' tasks).
 *  You may also wish to pass other options to the bundler
 *  such as .exclude('dependency-to-exclude')
 */

var jstify = require('jstify'),
    uglify = require('uglifyify');

exports.browserifyOptions = function(bundler, env){

  if (env === 'dev') {

    bundler.transform(jstify)

    return bundler;

  }

  if (env === 'prod') {

    bundler.transform(jstify)
    bundler.transform({global: true}, uglify)
    return bundler;

  }

};

/** GULP CSS PREPROCESSOR OPTIONS **/

/*
 *  Gulp is the automation tool, so you may pass in any
 *  CSS preprocessor that is compatible with gulp streams.
 *  By default, SASS is used. Gulp is quite simple and it
 *  may be easier to configure a different build/watch-styles
 *  process by directly editing the build/built-styles.js
 *  and build/watch-styles.js files.
 */

var sass = require('gulp-sass');

exports.gulpCSSPreprocessor = sass();
