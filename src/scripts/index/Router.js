var Router = (routes) => {

  var Router = Backbone.Router.extend({

    routes: routes

  });

  return new Router();
};

export default Router;
