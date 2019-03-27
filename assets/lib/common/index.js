require.config({
    baseUrl: 'assets/lib',
    paths: {
        jquery: 'common/jQuery',
        backbone: 'common/backbone',
        underscore: 'common/underscore',
        director: 'common/director',
        router: 'router/index'
    }
});

require(['jquery', 'underscore', 'backbone', 'router'], function($, Backbone, Underscore, Router) {
    console.log(Router)
});