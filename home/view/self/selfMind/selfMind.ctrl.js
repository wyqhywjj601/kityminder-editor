 angular.module("mindManage")
     .controller('selfMindCtrl', ['$modal', '$scope', function ($modal, $scope) {

         $scope.fileRename = function () {
             // 重命名弹窗

             var modalDatas = {
                renameValue:'222'
             };

             var renameModal = $modal.open({
                 animation: true,
                 templateUrl: 'home/view/self/selfMind/modal/rename/rename.tpl.html',
                 controller: 'rename.ctrl',
                 size: 'md',
                 resolve: {
                    modalDatas: function () {
                         return modalDatas;
                     }
                 }
             });

             renameModal.result.then(function (result) {
                 console.log(result);
                 // minder.execCommand('image', result.url, result.title || '');
             },function(){
                console.log('cancel')
             });

         }

     }]);