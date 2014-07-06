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
            '*All': 'getIndex'
        },
        getIndex : getIndex
    });

    function getIndex() {
        loadMainContent('index');
    }
});