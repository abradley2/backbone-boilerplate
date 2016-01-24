class NavbarView extends Backbone.View

  template: require './navbarTemplate.hbs'

  render: ->
    @$el.html @template()

  remove: ->
    @$el.empty()

module.exports = NavbarView
