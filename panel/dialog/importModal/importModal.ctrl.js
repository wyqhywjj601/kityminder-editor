angular.module('kityminderPanel')
    .controller('importModal.ctrl', ['$http', '$scope', '$modalInstance',  'server', function ($http, $scope, $modalInstance, server) {
        $scope.readFile=function(file){
            console.log(file)
        }
    }]);