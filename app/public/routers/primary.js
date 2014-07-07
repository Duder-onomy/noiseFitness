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
            'logout' : 'getLogout',
            'register' : 'getRegister',
            '' : 'getIndex'
        },
        getLogin : getLogin,
        getLogout : getLogout,
        getRegister : getRegister,
        getIndex : getIndex
    });

    function getLogin() {
        loadMainContent('login');
    }

    function getLogout() {
        loadMainContent('logout');
    }

    function getRegister() {
        loadMainContent('register');
    }

    function getIndex() {
        loadMainContent('index');
    }

});