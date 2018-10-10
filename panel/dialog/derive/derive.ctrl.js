angular.module('kityminderPanel')
    .controller('derive.ctrl', ['$http', '$scope', '$modalInstance', 'derive', 'server', function ($http, $scope, $modalInstance, derive, server) {

        $scope.data = {
            list: [],
            url: derive.url || '',
            title: derive.title || '',
            R_URL: /^https?\:\/\/\w+/,
            protocolList: ['xmind', 'text', 'markdown'],

        };

        $scope.ptoyocolDict = {
            xmind: 'xmind 格式 (.xmind)',
            text: '大纲文本 (.txt)',
            markdown: 'Markdown/GFM 格式 (.md)'
        }

        // 导出文件
        $scope.exportFile = function (protocol) {
            var editor = window.editor;
            var parentFSM = editor.hotbox.getParentFSM(); // 状态机

            editor.minder.exportData(protocol).then(function (res) {
                console.log(res)
            }, function (err) {
                console.log(err);
            });
        };

        // 搜索图片按钮点击事件
        $scope.searchImage = function () {
            $scope.list = [];
            $scope.exports = [];

            getImageData()
                .success(function (json) {
                    if (json && json.data) {
                        for (var i = 0; i < json.data.length; i++) {
                            if (json.data[i].objURL) {
                                $scope.list.push({
                                    title: json.data[i].fromPageTitleEnc,
                                    src: json.data[i].middleURL,
                                    url: json.data[i].middleURL
                                });
                            }
                        }
                    }
                })
                .error(function () {

                });
        };
    }]);