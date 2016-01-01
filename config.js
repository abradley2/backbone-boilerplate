exports.bundleOptions = {

  'distLocation': './dist'

};


/** BROWSERIFY TRANSFORMS **/

var jstify = require('jstify'),
    stringify = require('stringify'),
    uglify = require('uglifyify');

exports.browserifyTransforms = function(bundler, env){

  if (env === 'dev') {

    bundler.transform(jstify)
    bundler.transform(stringify(['.html']))
    return bundler;

  }

  if (env === 'prod') {

    bundler.transform(jstify)
    bundler.transform(stringify(['.html']))
    bundler.transform({global: true}, uglify)
    return bundler;

  }

};
