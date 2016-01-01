var ViewManager = (function() {

  function setupFactories(views) {
    var retVal = {};
    _.each(views, function(factory, name) {
      retVal[name] = {
        factory: _.isFunction(factory) ? factory : function(){
          return factory
        },
        isRendered: false
      };
    });
    return retVal;
  }

  var ViewManager = Backbone.View.extend({

    initialize: function(params) {
      var el = params.el,
          views = params.views,
          layouts = params.layouts;
      this.setElement(el);
      this.views = setupFactories(views);
      this.layouts = setupFactories(layouts);
    },

    render: function(renderConfig) {
      var layout = renderConfig.layout,
          views = renderConfig.views,
          params = renderConfig.params;
      this.cleanupViews(_.omit(this.views, _.values(views)));
      this.renderLayout(layout);
      this.renderViews(views, params);
    },

    remove: function() {
      this.cleanupViews(_.values(this.views));
      this.$el.empty();
    },

    cleanupViews: function(views) {
      views.forEach(function(view){
        view.isRendered = false;
        if (view.controller) view.controller.remove();
        view.controller = null;
      });
    },

    renderLayout: function(layout) {
      if (!this.layouts[layout].isRendered) {
        this.template = this.layouts[layout].factory();
        this.$el.html(this.template);
      }
      _.each(_.omit(this.layouts, layout), function(layout){
        layout.isRendered = false;
      });
    },

    renderViews: function(newView, params) {
      _.each(newView, function(viewName, el){
        var view = this.views[viewName];
        view.isRendered = true;
        if (!view.controller) view.controller = new view.factory();
        view.controller.setElement(el);
        view.controller.render();
      }, this);
    }

  });

  return ViewManager;

})();

module.exports = ViewManager;
