class HomeView extends Backbone.View

  template: require './homeTemplate.hbs'

  initialize: (el, params) ->
    @model = new Backbone.Model params

  render: ->
    @$el.html @template @model.toJSON()

  remove: ->
    @$el.empty()

module.exports = HomeView
