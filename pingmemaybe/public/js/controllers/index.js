angular.module('mean.check').controller('IndexController', ['$scope', '$routeParams', '$location', 'Global', 'Check', function ($scope, $routeParams, $location, Global, Check) {
    $scope.global = Global;
    $scope.check = function() {
        this.url = $routeParams.url;
        Check.check({
            url: this.url
        }, function(res) {
            $scope.results = res;
        });

    };
}]);
