/* globals $ */
'use strict';

angular.module('feedrApp')
    .directive('feedrAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
