var template = require('./homeTemplate.hbs');

module.exports = Backbone.View.extend({

  template: template,

  initialize: function(){

  },

  render: function(){
    var html = this.template({
      'message': 'Welcome to the Wonderful World of Backbone.js!'
    });

    this.$el.html(html);
  },

  remove: function(){
    this.$el.empty();
  }

});
