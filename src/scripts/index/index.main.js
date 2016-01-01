var ViewManager = require('./ViewManager.js'),
    routes = require('./routes'),
    layouts = require('./layouts'),
    views = require('./views');

$(document).ready(function(){

  window.app = {
    /*
      The viewManager handles rendering of combinations of layouts and their
      nested views, and keeps track of which are rendered to automate disposal
      upon every call to render a new layout/view set.
    */
    viewManager: new ViewManager({
      views: views,
      layouts: layouts,
      el: 'body'
    }),

    /*
      The router simply responds to url changes by telling the viewManager to
      render a new layout/view set accordingly.
    */
    router: new (Backbone.Router.extend({
      routes: routes
    }))
  };

  Backbone.history.start();
});
