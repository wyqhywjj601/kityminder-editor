angular.module('kityminderPanel')
    .directive('createMind', function () {
        return {
            restrict: 'E',
            templateUrl: 'panel/directive/createMind/createMind.html',
            scope: {
                minder: '=',
            },
            replace: true,
            controller: function ($scope) {
                $scope.initTemplate = {
                    "root": {
                        "data": {
                            "text": "思维导图",
                            "note": null
                        },
                        "children": []
                    },
                    "template": "default",
                    "theme": "fresh-blue",
                    "version": "1.4.43"
                };

                // 新建模板类型
                $scope.tplTypeList = [{
                    name: '思维导图',
                    id: 'default'
                }, {
                    name: '组织结构图',
                    id: 'structure'
                }, {
                    name: '目录组织图',
                    id: 'filetree'
                }, {
                    name: '逻辑结构图',
                    id: 'right'
                }, {
                    name: '鱼骨头图',
                    id: 'fishbone'
                }, {
                    name: '天盘图',
                    id: 'tianpan'
                }];

            },
            link: function ($scope) {
                $scope.createTemplate = function (type) {
                    const typeId = type.id;

                    $scope.initTemplate.template = typeId;
                    var templateStr = JSON.stringify( $scope.initTemplate);
                    editor.minder.importData('json', templateStr).then(function (data) {});
                }
            }
        }
    });