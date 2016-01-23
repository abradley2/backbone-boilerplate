module.exports = function(){
  app.viewMediator.render({
    layout: 'main',
    views: {
      '#navigation-region': 'NavbarView',
      '#content-region': 'HomeView'
    },
    params: {}
  });
}
