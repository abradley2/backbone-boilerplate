import template from './home.jade';

export default Backbone.View.extend({

  template: template,

  initialize: function(){

  },

  render(){
    this.$el.html(this.template());
  },

  remove(){
    this.$el.empty();
  }

});
