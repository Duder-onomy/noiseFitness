define(['text!login/template.html'], function (template) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        modelData : {
            title : 'Login Page'
        }
    };
});