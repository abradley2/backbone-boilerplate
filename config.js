/** DIST OPTIONS **/

/*
 *  These options specify gulp output paramters,
 *  namely the dist folder gulp should dump
 *  everything to. By default it is the local
 *  ./dist folder. You may probably wish to change
 *  this to the static/public directory of your sever.
 */

exports.distOptions = {

  'scriptsDistFolder': './public/dist/scripts',

  'stylesDistFolder': './public/dist/styles'

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
    stringify = require('stringify');

exports.browserifyOptions = function(bundler, env){

  if (env === 'watch') {


    bundler.transform(hbsfy.configure({extensions: ['hbs']}));
    bundler.transform(stringify(['.html']));

    return bundler;

  }

  if (env === 'build') {

    bundler.transform(hbsfy.configure({extensions: ['hbs']}));
    bundler.transform(stringify(['.html']));

    return bundler;

  }

};
