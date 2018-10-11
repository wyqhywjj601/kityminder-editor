angular.module('kityminderPanel')
    .directive('recentlyList', function () {
        return {
            restrict: 'E',
            templateUrl: 'panel/directive/recentlyList/recentlyList.html',
            scope: {
                minder: '=',
                tabs: '='
            },
            replace: true,
            link: function ($scope) {
                console.log($scope)
            }
        }
    });