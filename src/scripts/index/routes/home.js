module.exports = function(){
  app.viewManager.render({
    layout: 'main',
    views: {
      '#content-region': 'Home'
    },
    params: {}
  });
}
