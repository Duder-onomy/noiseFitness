(function (require) {
    'use strict';

    require.config({
        packages : [
            {
                name : 'underscore',
                location : 'vendor/lodash-amd/underscore'
            },
            {
                name : 'masseuse',
                location : 'vendor/masseuse/app'
            }
        ]
        //  paths: 
        , paths: {
            'loadMainContent' : 'routers/loadMainContent',
            'routers' : 'routers',
            'jquery' : 'vendor/jquery/dist/jquery',
            'rivets' : 'vendor/rivets/dist/rivets',
            'backbone' : 'vendor/backbone-amd/backbone',
            'text' : 'vendor/requirejs-text/text',
            'index' : 'views/index'
        }
    });

    require([
        'backbone',
        'routers/primary'
    ], function (Backbone, PrimaryRouter) {
        new PrimaryRouter();
        Backbone.history.start();
    });
}(require));
