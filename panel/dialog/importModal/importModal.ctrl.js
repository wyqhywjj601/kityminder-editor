angular.module('kityminderPanel')
    .controller('importModal.ctrl', ['$http', '$scope', '$modalInstance', 'server', function ($http, $scope, $modalInstance, server) {

        $scope.title = "上传";
        $scope.readFile = function (fileInput) {
            var editor = window.editor;
            var file = fileInput.files[0];
            var fileType = file.name && file.name.substr(file.name.lastIndexOf('.') + 1);

            switch (fileType) {
                case 'md':
                    fileType = 'markdown';
                    break;
                case 'km':
                case 'json':
                    fileType = 'json';
                    break;
                default:
                    console.log("File not supported!");
                    alert('只支持.km、.md、.json文件');
                    fileInput.outerHTML = fileInput.outerHTML; //重新初始化了file的html
                    return;
            }

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