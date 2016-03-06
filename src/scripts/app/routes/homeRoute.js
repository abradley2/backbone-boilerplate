var viewMediator = require('../viewMediator.js');

/*
  Routes turn url changes into page changes! Their main job, therefore
  is to respond tell the viewMediator what the page should look like
  in response to a route change.

  For documentation on how the viewMediator works:
  https://github.com/abradley2/backbone-view-mediator

  How your views are referenced depends on the structure of your
  /views/index.js export.

  How your layouts are referenced depends on the structure of your
  /layouts/index.js export.
*/

module.exports = function( message ){
  viewMediator.render({
    layout: 'mainLayout',

    /*
      The key here is a queryString for the dom node the view will be mounted at.
      "Mounting" is the view calling setElement for the view on that dom node.
    */
    views: {
      '#navigation-region': 'NavbarView',
      '#content-region': 'HomeView'
    },

    /*
      Params are very important. If you have a params object assigned
      to a views namespace, these will be passed to it as the second
      argument of it's initialize function when it is *first* rendered.

      If the viewMediator would tell an already-rendered view to render
      again, it instead calls view.model.set( yourParamsObject ) on it.
      Once again, refer to the viewMediator documentation.
    */
    params: {
      'HomeView': {
        header: 'Welcome to a Better Backbone Boilerplate!',
        message: message
      }
    }
  });
}
