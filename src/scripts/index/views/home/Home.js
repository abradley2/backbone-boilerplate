var template = require('./home.tpl');

module.exports = Backbone.View.extend({

  template: template,

  initialize: function(){

  },

  render(){
    this.$el.html(this.template({
      greeting: 'hello world'
    }));
  },

  remove(){
    this.$el.empty();
  }

});
