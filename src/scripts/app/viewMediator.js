var layouts = require('./layouts'),
    views = require('./views');

/*
  The viewMediator handles rendering of combinations of layouts and their
  nested views, and keeps track of which are rendered to automate disposal
  upon every call to render a new layout/view set.

  For full documentation of the Backbone View Mediator see the README.md
  https://github.com/abradley2/backbone-view-mediator
*/

module.exports = new Backbone.ViewMediator({
  layouts: layouts,
  views: views,
  el: 'body'
});
