module.exports = function(){
  app.viewMediator.render({
    layout: 'main',
    views: {
      '#content-region': 'HomeView'
    },
    params: {}
  });
}
