angular.module('kityminderPanel')
    .controller('importModal.ctrl', ['$http', '$scope', '$modalInstance', 'server', function ($http, $scope, $modalInstance, server) {
        $scope.readFile = function (file) {
            var editor = window.editor;

            var reader = new FileReader();
            reader.onload = function (e) {
                var content = reader.result;
                editor.minder.importData('json', content).then(function (data) {
                    $modalInstance.close();
                 
                });
            }
            reader.readAsText(file);
          
        }
    }]);