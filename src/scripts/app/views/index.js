/*
  All views exported here must be constructor functions for Backbone.Views.
  The viewMediator will refer to them by the key they are indexed by here.

  Each view is expected to have a render and remove function. Render is called
  automatically by the viewMediator when the view is present in a render call.

  Remove is called automatically when the view is no longer needed. Each view
  has its $el set automatically, so there is generally no need to call setElement()
  from within the view.
*/

module.exports = {
  'HomeView': require('./home/HomeView.js'),
  'NavbarView': require('./navbar/NavbarView.js')
};
