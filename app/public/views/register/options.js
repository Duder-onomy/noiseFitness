define(['text!register/template.html'], function (template) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        modelData : {}
    };
});