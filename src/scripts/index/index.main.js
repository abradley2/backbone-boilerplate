var ViewManager = require('./ViewManager.js'),
    data = require('./data'),
    routes = require('./routes'),
    layouts = require('./layouts'),
    views = require('./views');

$(document).ready(function(){

  window.app = {
    /*
      The data namespace is a generic holder for factory functions that
      return Backbone Models and Collections
    */
    data: data,

    /*
      It is often useful to have a single Backbone Model containing globals,
      for variables that act as 'session' variables.
    */
    globals: new (Backbone.Model.extend({
      defaults: {
        // ex: loggedIn: false
      }
    })),

    /*
      The viewMediator handles rendering of combinations of layouts and their
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
      render a new layout/view set accordingly. Your routes will be functions
      that call the viewMediator's render method.
    */
    router: new (Backbone.Router.extend({
      routes: routes
    }))
  };

  Backbone.history.start();
});
