require.config({
    baseUrl: 'assets/lib',
    paths: {
        jquery: 'common/jQuery',
        backbone: 'common/backbone',
        underscore: 'common/underscore',
        director: 'common/director',
        router: 'router/index'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'router'], function($, Backbone, _, Router) {
    console.log(Router)
});