'use strict';

angular.module('feedrApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
