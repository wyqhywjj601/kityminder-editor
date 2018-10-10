angular.module('kityminderPanel')
    .controller('importModal.ctrl', ['$http', '$scope', '$modalInstance', 'server', function ($http, $scope, $modalInstance, server) {

        $scope.title = "上传";
        $scope.readFile = function (file) {
            var editor = window.editor;

            var reader = new FileReader();
            reader.onload = function (e) {
                var content = reader.result;
                editor.minder.importData('json', content).then(function (data) {
                    $modalInstance.close($scope.title);

                });
            }
            reader.readAsText(file);

        }
    }]);