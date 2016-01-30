var homeRoute = require('./homeRoute.js');

/*
  The export here is tied to your router. Each path should correspond to a
  function to be executed when it matches the url to the left. Naturally,
  any route params via dynamic segments 'such/:as/:these' will be passed as
  arguments to that function.

  The job of any route function is to generally render the page, and they
  do this through the viewMediator.
*/

module.exports = {
  '': homeRoute,
  'home': homeRoute,
  'home/:message': homeRoute
};
