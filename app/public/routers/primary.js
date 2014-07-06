/*global define*/
define([
    'jquery','underscore',
    'backbone',
    'masseuse',
    'loadMainContent'
], function (
    $, _,
    Backbone,
    masseuse,
    loadMainContent) {
    'use strict';

    var MasseuseRouter = masseuse.MasseuseRouter;

    return MasseuseRouter.extend({
        userModel : null,
        routes: {
            'login' : 'getLogin',
            '*default' : 'getIndex'
        },
        getIndex : getIndex,
        getLogin : getLogin
    });

    function getIndex() {
        loadMainContent('index');
    }

    function getLogin() {
        loadMainContent('login');
    }
});