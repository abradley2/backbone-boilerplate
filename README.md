### Purpose

This is a starting point to facilitate quick development of Backbone.js front-ends

### Prerequisites

Node >= v0.12.0

Run `npm install` to retrieve development dependencies.

### Scripts

The following scripts are available. Watch scripts will watch source files for
changes and rerun the build accordingly.  

`npm run watch-scripts`  
`npm run watch-styles`  
`npm run watch` (watches both scripts and styles)

`npm run build-scripts`  
`npm run build-styles`   
`npm run build` (builds both scripts and styles)

All tasks can be run directly through Gulp in place of npm run if you have Gulp installed globally.

Build tasks will minify their output. Watch tasks will add sourcemaps to the output.

### The Build Process

All files in `/src/scripts` that follow the pattern `**.main.js` will be
bundled via Browserify, with `main` tag replaced with `bundle` and piped to the
directory specified in the root's `config.js` file.

Built in Browserify transforms:
1. .html will be transformed via stringify
2. .tpl will be transformed via jstify (precompiles underscore-style templates)

All `.scss` files  will be precompiled through [Sass](http://sass-lang.com/)  


### Included Libraries

JavaScript:
1. lodash
2. jQuery
3. Backbone

CSS:
1. Bourbon
2. Neat
3. Font Awesome
