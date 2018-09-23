var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope){
    $scope.displayedNav = false;
    $scope.navigationItems = ['Home', 'About me', 'My skills', 'My projects', 'Contact'];
    $scope.displayNavigation = function() {
        $scope.displayedNav = $scope.displayedNav ? false : true;
    };
});