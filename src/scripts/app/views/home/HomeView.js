var template = require('./homeTemplate.hbs');

module.exports = Backbone.View.extend({

  template: template,

  /*
    When a view is initialized via the View Mediator, it is passed,
    the element it is being 'mounted' to as the first initialization
    argument. The second argument is the 'params' object assigned
    to the view in the View Mediators render configuration. You should
    usually assign these to a 'this.model' - an instance of Backbone.Model.

    setElement() is called for you by the viewMediator
  */
  initialize: function(el, params){
    this.model = new Backbone.Model(params);

    /*
        If the view is rendered again and these parameters are updated,
        `initialize` and `render` won't be automatically called again,
        instead this.model.set( newParams )
        will be called. This is to ensure views aren't re-rendered again
        needlessly, but to still allow them to listen for changes and
        adjust accordingly if it must act on new params received.
    */
    this.model.on('change:message', this.render, this);
  },


  render: function(){
    var html = this.template(
      this.model.toJSON()
    );

    this.$el.html(html);
  },

  remove: function(){
    this.model.off();
    this.$el.empty();
  }

});
