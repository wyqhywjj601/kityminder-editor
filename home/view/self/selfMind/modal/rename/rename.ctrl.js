angular.module('mindManage')
    .controller('rename.ctrl', function ($scope, $modalInstance, modalDatas) {
        var $ctrl = this;

        // $ctrl.insta
        $scope.renameValue = '';
        $scope.modalDatas = modalDatas;
        $scope.ok = function () {
            var renameValue = $scope.renameValue;

            // 点击确认事件
            $modalInstance.close(
                $scope.modalDatas //在模态框View中修改的值传递回去，view中可以直接添加属性
            );
        };

            // 点击取消事件
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        }
    });