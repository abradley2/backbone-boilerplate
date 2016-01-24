data    = require 'data'
layouts = require 'layouts'
views   = require 'views'
rotues  = require 'routes'

document.ready ->
  window.app = {
    # The data namespace is a generic holder for factory functions that
    # return Backbone Models and Collections
    data: data

    globals: new class extends Backbone.Model

    viewMediator: new BackboneViewMediator {
      views: views,
      layouts: layouts,
      el: 'body'
    }

    router: new Backbone.Router routes: routes
  }

  Backbone.history.start()
