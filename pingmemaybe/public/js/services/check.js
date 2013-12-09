//Articles service used for articles REST endpoint
angular.module('mean.check').factory("Check", ['$resource', function($resource) {
    return $resource('check/', {}, {
        check: {
            method: 'POST'
        }
    });
}]);
