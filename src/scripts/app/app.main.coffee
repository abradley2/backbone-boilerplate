data    = require './data/index.coffee'
layouts = require './layouts/index.coffee'
views   = require './views/index.coffee'
routes  = require './routes/index.coffee'

$(document).ready ->
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
