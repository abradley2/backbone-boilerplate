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
1. `.hbs` files will be transformed via handlebars/hbsfy
2. `.html` files will be transformed so they are require-able as text via stringify

All `.scss` files  will be precompiled through [Sass](http://sass-lang.com/)  

The build process can be easily configured and edited through the `config.js` file
in the root of the project. You can also add custom tasks in the `/build` folder,
then register them in `gulpfile.js`.

### Included Libraries

JavaScript:

1. undersore
2. jQuery
3. Backbone

CSS:

1. Bourbon
2. Neat
3. Bitters
