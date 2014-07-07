define(['text!logout/template.html'], function (template) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        modelData : {}
    };
});