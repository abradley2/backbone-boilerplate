/*
  Each layout is a string of static html containing sections with
  id's that you can refer to when you wish to render a view in
  that layout. They key assigned to each layout will be the name
  by which the viewMediator references that layout.
*/

module.exports = {
  'mainLayout': require('./mainLayout.html')
};
