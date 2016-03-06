var routes = require('./routes');

/*
  The router simply responds to url changes by telling the viewManager to
  render a new layout/view set accordingly. Your routes will be functions
  that call the viewMediator's render method.
*/

module.exports = new Backbone.Router({
  routes: routes
});
