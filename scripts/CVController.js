app.controller('CVController', ['$scope', function ($scope) {
    $scope.data = pageData;
    $scope.status = {
        isCustomHeaderOpen: false
        , isFirstOpen: true
        , isFirstDisabled: false
    };

}]);