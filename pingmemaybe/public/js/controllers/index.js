angular.module('mean.check').controller('IndexController', ['$scope', '$routeParams', '$location', 'Global', 'Check', function ($scope, $routeParams, $location, Global, Check) {
    $scope.global = Global;
    $scope.check = function() {
        this.url = decodeURIComponent($routeParams.url);
        Check.check({
            url: this.url
        }, function(res) {
            $scope.results = res;
        });

    };
    $scope.create = function() {
        $location.path("check/"+encodeURIComponent(this.url));
    }
    $scope.goBack = function() {
        $location.path('/');
    }

}]);
