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

var hbsfy = require("hbsfy"),
    stringify = require('stringify')
    coffeeify = require('coffeeify');

exports.browserifyOptions = function(bundler, env){

  if (env === 'watch') {

    bundler.transform(coffeeify);
    bundler.transform(hbsfy.configure({extensions: ['hbs']}));
    bundler.transform(stringify(['.html']));

    return bundler;

  }

  if (env === 'build') {

    bundler.transform(coffeeify);
    bundler.transform(hbsfy.configure({extensions: ['hbs']}));
    bundler.transform(stringify(['.html']));

    return bundler;

  }

};
