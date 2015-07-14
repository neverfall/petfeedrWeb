'use strict';

angular.module('feedrApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


