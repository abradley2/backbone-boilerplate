### Purpose

This is a starting point to facilitate quick development of the client in web sites
and applications. The only included client-side libraries are jQuery, Lodash, and
Backbone, but of course all these are optional (just so often used by me that I've
chosen to include them here).

This solution does not include a back end and leaves it to you.
http-server is included along with a script to spin it up as a
prototyping convenience.

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

`npm run start-server` (spins up an http-server from the /dist folder)

### The Build Process

All files in `/src/scripts` that follow the pattern `**.main.js` will be precompiled
through [Babel](https://babeljs.io/) and added to `/dist/scripts` as `**.bundle.js`  

All `.scss` files through the entry-point of `/src/styles/main.scss` will be precompiled
through [Sass](http://sass-lang.com/) and added to `/dist/styles` as `main.css`  

Build tasks will minify their output. Watch tasks will add sourcemaps to the output.

### Included Libraries

JavaScript:
1. lodash
2. jQuery
3. Backbone

CSS:
1. Bourbon
2. Neat
3. Font Awesome
