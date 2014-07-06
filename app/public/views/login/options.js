define(['text!index/template.html'], function (template) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        rivetsConfig : {
            instaUpdate : true
        },
        modelData : {
            title : 'Noise Fitness.. Rock.'
        }
    };
});