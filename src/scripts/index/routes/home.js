export default function(){
  app.viewManager.render({
    layout: 'main',
    views: {
      '#content-region': 'home'
    },
    params: {}
  });
}
