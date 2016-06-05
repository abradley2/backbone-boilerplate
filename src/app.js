window._ = require('underscore')
window.$ = require('jquery')
window.Backbone = require('backbone')
Backbone.ViewMediator = require('backbone-view-mediator')

var viewMediator = new Backbone.ViewMediator({
    el: 'body',
    layouts: {
        MainLayout: require('./layouts/MainLayout.html')
    },
    views: {
        NavbarView: require('./views/Navbar/NavbarView.js'),
        HomeView: require('./views/Home/HomeView.js')
    }
})

function homeRoute (message) {
    viewMediator.render({
        layout: 'MainLayout',
        views: {
            '#navigation-region': 'NavbarView',
            '#content-region': 'HomeView'
        },
        params: {
            'HomeView': {
                message: message || null
            }
        }
    })
}

var routes = {
    '': homeRoute,
    'home': homeRoute,
    'home/:message': homeRoute
}

var app = new Backbone.Router({routes: routes})

document.addEventListener('DOMContentLoaded', function () {

    Backbone.history.start()

})
