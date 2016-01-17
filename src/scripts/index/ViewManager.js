function mapObject(obj, callback, thisContext){
  return Object.keys(obj).map( function(key){
    return (callback.bind(thisContext ? thisContext : obj))(obj[key], key);
  });
}

function values(obj){
  return Object.keys(obj).map( function(key){
    return obj[key];
  });
}

function keys(obj){
  return Object.keys(obj);
}

function omit(obj, omitKeys){
  if (typeof omitKeys === 'string') omitKeys = [omitKeys];
  var retObj = {};
  keys(obj)
    .filter( function(key){
      return (omitKeys.indexOf(key) === -1);
    }).forEach( function(key){
      retObj[key] = obj[key];
    });
  return retObj;
}

function isFunction(sut){
  return (typeof(sut) === 'function');
}


function setupFactories(views) {
  var retVal = {};
  mapObject(views, function(factory, name) {
    retVal[name] = {
      factory: isFunction(factory) ? factory : function(){
        return factory
      },
      isRendered: false
    };
  });
  return retVal;
}

var ViewManager = (function() {

  var ViewManager = Backbone.View.extend({

    initialize: function(params) {
      this.el = document.querySelector(params.el);
      this.views = setupFactories(params.views);
      this.layouts = setupFactories(params.layouts);
    },

    render: function(renderConfig) {
      var layoutToRender = renderConfig.layout,
          viewsToRender = renderConfig.views,
          params = renderConfig.params;

      // remove views that aren't specified in the render config object,
      // do this by getting the view names from the renderConfig, then
      // passing in all the views registered in the ViewMediator, with those
      // omitted. Ugly function, sorry.
      this.cleanupViews(
        keys(
          omit(
            this.views,
            values(viewsToRender)
          )
        )
      );

      this.renderLayout(layoutToRender);
      this.renderViews(viewsToRender, params);
    },

    remove: function() {
      this.cleanupViews(values(this.views));
      this.el.innerHTML = '';
    },

    cleanupViews: function(views) {
      if (typeof(views) === 'string') views = [views];

      views.forEach(function(_view){
        var view = this.views[_view];

        // set view.isRendered to false
        view.isRendered = false;

        // tell the view instance to call its remove function
        if (view.controller) view.controller.remove();

        // setting the controller to null tells the VM to construct a new one on next render
        view.controller = null;

      }, this);
    },

    renderLayout: function(layout) {

      // if they layout is new, all views must be unmounted/remounted
      if (!this.layouts[layout].isRendered) {
        this.cleanupViews(keys(this.views));

        this.el.innerHTML = this.layouts[layout].factory()

        // ensure all other layouts have isRendered = false
        mapObject(this.layouts, function(layout){layout.isRendered = false});

        // current layout should have isRendered = true
        this.layouts[layout].isRendered = true;
      }

    },

    renderViews: function(newView, params) {
      mapObject(newView, function(viewName, el){
        var view = this.views[viewName];


        // if the view is not rendered, then its Backbone.View must be constructed
        // and initialized from its factory.
        if (!view.controller) view.controller = new view.factory(params[viewName]);

        // Always call setElement for the view
        view.controller.setElement(el);

        // if the view is already rendered, do not re-render
        // just call set on it's models for any params assigned to it.
        if (view.isRendered){

          if (params[viewName] && view.controller.model) {
            view.controller.model.set(params[viewName]);
          }

        } else {

          view.isRendered = true;
          view.controller.render();

        }
      }, this);
    }

  });

  return ViewManager;

})();


module.exports = ViewManager;
