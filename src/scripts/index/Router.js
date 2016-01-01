var Router = function(routes){

  var Router = Backbone.Router.extend({

    routes: routes

  });

  return new Router();
};

module.exports = Router;
