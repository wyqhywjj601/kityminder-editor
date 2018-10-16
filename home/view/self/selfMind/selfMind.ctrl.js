 angular.module("mindManage")
     .controller('selfMindCtrl', ['$modal', '$scope', function ($modal, $scope) {
         // mock数据
         $scope.mindList = [{
                 name: 'aaa.md',
                 changeTime: '2017-10-10',
                 id: '1uh8432eb91231'
             },
             {
                 name: 'bbb.md',
                 changeTime: '2018-10-10',
                 id: '1uh8432eb913222'
             }, {
                 name: 'bbb.md',
                 changeTime: '2018-10-10',
                 id: '1uh8432eb91322'
             },
             {
                 name: 'ccc.md',
                 changeTime: '2018-12-10',
                 id: '1uh8432eb911233'
             }
         ];

         // 批量操作 start
         // 多选框
         $scope.selected = [];

         var updateSelected = function (action, id) {
             if (action == 'add' && $scope.selected.indexOf(id) == -1) {
                 $scope.selected.push(id);
             }
             if (action == 'remove' && $scope.selected.indexOf(id) != -1) {
                 $scope.selected.splice($scope.selected.indexOf(id), 1);
             }
         };

         //更新某一列数据的选择
         $scope.updateSelection = function ($event, id) {
             var checkbox = $event.target;
             var action = (checkbox.checked ? 'add' : 'remove');
             updateSelected(action, id);
         };

         //全选操作
         $scope.selectAll = function ($event) {
             var checkbox = $event.target;
             var action = (checkbox.checked ? 'add' : 'remove');
             for (var i = 0; i < $scope.mindList.length; i++) {
                 var contact = $scope.mindList[i];
                 updateSelected(action, contact.id);
             }
         };

         $scope.isSelected = function (id) {
             return $scope.selected.indexOf(id) >= 0;
         };

         $scope.isSelectedAll = function () {
             return $scope.selected.length === $scope.mindList.length;
         };

         // 批量操作 end


         // 新建脑图
         $scope.createMind = function () {
             window.location.href = "/edit.html"
         }

         // 重命名弹窗
         $scope.fileRename = function (item) {

             var modalDatas = {
                 renameValue: item.name // 传入item的文件名
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
             }, function () {
                 console.log('cancel');
             });

         }

     }]);