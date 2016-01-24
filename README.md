# Purpose

This is a starting point to facilitate quick development of Backbone.js front-ends.

It includes only the standard Backbone.js libraries, with [Backbone View Mediator](https://www.npmjs.com/package/backbone-view-mediator) being the only necessary
adition. I made this out of frustration of all other Backbone boilerplates determining far too much about my code structure, and including far too many conventions to learn. This boilerplat aims to be as close to vanilla Backbone as possible.

# Installation

To get started, first clone this repository (to the latest commit):
```
git clone --depth 1 https://github.com/abradley2/backbone-frontend-starter
```

Then install your needed dependencies with:
```
npm install
```

Then run one of the scripts to git' you rolling

# Scripts

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
directory specified in the root's `config.js` file. This easily
allows you to create multiple bundles if you are not exactly building a pure 'spa'

Built in Browserify transforms:
1. `.hbs` files will be transformed via handlebars/hbsfy
2. `.html` files will be transformed so they are require-able as text via stringify

All `.styl` files  will be precompiled through [Stylus](https://www.npmjs.com/package/stylus).
Stylus is a superset of CSS, so if you aren't familiar with the pre-processor, don't worry-
just write plain-ol' CSS!

The build process can be easily configured and edited through the `config.js` file
in the root of the project. You can also add custom tasks in the `/build` folder,
then register them in `gulpfile.js`.

# Included Libraries

JavaScript:

1. [undersore](https://www.npmjs.com/package/underscore)
2. [jQuery](https://www.npmjs.com/package/jquery)
3. [Backbone](https://www.npmjs.com/package/backbone)
4. [Backbone View Mediator](https://www.npmjs.com/package/backbone-view-mediator)


# ...now what?

Write some code. If you know Backbone, you should have no problem working with this
boilerplate. The _only_ opinionated convention it adds is the [Backbone View Mediator](https://www.npmjs.com/package/backbone-view-mediator). This is the only convention
I could not avoid having to add, as Backbone simply has no built in solution for this area.

Once you build, open up `index.html` by whatever means, and there are instructions Included
in the boilerplate homepage to help you out.

### CoffeeScript

For the CoffeeScript version, please check out the CoffeeScript branch of this repository.
