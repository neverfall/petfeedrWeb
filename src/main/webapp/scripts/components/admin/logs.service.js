'use strict';

angular.module('feedrApp')
    .factory('LogsService', function ($resource) {
        return $resource('api/logs', {}, {
            'findAll': { method: 'GET', isArray: true},
            'changeLevel': { method: 'PUT'}
        });
    });
