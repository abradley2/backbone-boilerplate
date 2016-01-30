# Purpose

This is a starting point to facilitate quick development of Backbone.js front-ends.

It includes only the standard Backbone.js libraries, with [Backbone View Mediator](https://www.npmjs.com/package/backbone-view-mediator) being the only necessary
addition.

This Boilerplate assumes you know how to work with Backbone reasonably well, but does not
assume you understand anything about the intended structure/conventions of the Boilerplate itself. For this reason is filled with helpful comments and should have all the information
you need to get started quickly. If there is something you don't understand, I consider
this an issue with the Boilerplate-
[so please open one :)](https://github.com/abradley2/backbone-frontend-starter/issues)

# Installation

To get started, first clone this repository (to the latest commit):
```
git clone --depth 1 https://github.com/abradley2/backbone-frontend-starter
```

If you want the CoffeeScript version, checkout the CoffeeScript branch and pull
from that.

Then install your needed dependencies with:
```
npm install
```

It is generally easiest to just delete the .git folder and reinitialize git to
map this to your own repository.  

Then run one of the scripts get started.

# Scripts

The following scripts are available. _"Watch"_ scripts will watch source files for
changes and rerun the build accordingly.  

`npm run watch-scripts`  
`npm run watch-styles`  
`npm run watch` (watches both scripts and styles)

`npm run build-scripts`  
`npm run build-styles`   
`npm run build` (builds both scripts and styles)

All tasks can be run directly through Gulp in place of npm run if you have Gulp installed globally.

# The Build Process

All files in `/src/scripts` that follow the pattern `**.main.js` will be
bundled via Browserify, with `main` tag replaced with `bundle` and piped to the
directory specified in the root's `config.js` file. This easily
allows you to create multiple bundles if you are not exactly building a pure 'spa'

Built in Browserify transforms:  

1. `.hbs` files will be transformed via handlebars/hbsfy
2. `.html` files will be transformed so they are require-able as text via stringify

All `.styl` files  will be precompiled through [Stylus](https://www.npmjs.com/package/stylus).
Stylus is a superset of CSS, so if you aren't familiar with the pre-processor, you
can simply write regular CSS.

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

Once you build, open up `/public/index.html` in your browser
[by whatever means](https://www.npmjs.com/package/http-server),
and see the default Boilerplate SPA.

### CoffeeScript

For the CoffeeScript version, please check out the CoffeeScript branch of this repository.
