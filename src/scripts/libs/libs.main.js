/*
  It is often better to include these libraries by importing the via CDN in your
  server-side layout. However, if you wish to have them bundled (if you have many
  small libraries this may be more convenient) include them here, and then export
  them to the window so they can be accessed through your other bundles.
*/

window._ = require('underscore');
window.$ = jQuery = require('jquery');
window.Backbone = require('backbone');
window.BackboneViewMediator = require('backbone-view-mediator');
