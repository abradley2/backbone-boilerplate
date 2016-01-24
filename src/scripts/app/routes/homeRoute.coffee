
module.exports = ->
  app.viewMediator.render {
    layout: 'mainLayout'
    views:
      '#navigation-region': 'NavbarView'
      '#content-region': 'HomeView'
    params:
      'HomeView':
        'message': 'Welcome to the Wonderful World of Backbone.js!'
  }
