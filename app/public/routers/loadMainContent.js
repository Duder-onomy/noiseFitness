define(['jquery', 'index/view', 'login/view', 'logout/view', 'register/view'],
    function($, index, login, logout, register) {

        'use strict';

        var currentView,
            viewTypes = {
                index : index,
                login : login,
                logout : logout,
                register : register
            };

        return loadMainContent;

        function loadMainContent (ViewType, options) {

            var $deferred = new $.Deferred(),
                newView;

            if (!options) {
                options = {};
            }

            newView = new viewTypes[ViewType](options);

            if (currentView) {
                currentView.remove();
            }

            newView.start()
                .done(function () {
                    currentView = newView;
                    $deferred.resolve(newView);
                })
                .fail(function () {
                    $deferred.reject();
                });

            return $deferred.promise();
        }
    });
