define(['jquery', 'director'], function($, Director) {
    var routes = {
        '/home': function() {
            require(['app/home'], function(dom) {
                var dom = new dom();
            });
        },
        '/about': function() {console.log('dddd')}
    };
    var router = Router(routes);
    router.init();
})