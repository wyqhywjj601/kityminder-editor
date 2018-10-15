angular.module('mindManage')
    .directive('home', function ($state) {
        return {
            restrict: 'E',
            templateUrl: 'home/view/home/home.html',
            scope: {
                minder: '=',
            },
            replace: true,
            controller: function ($scope) {
                $scope.navDict = [{
                        name: '我的脑图',
                        child: [{
                            name: '我的文件',
                            url:"selfMind"
                        }, {
                            name: '我的分享',
                            url:"myshare"
                        }, {
                            name: '我的收藏',
                            url:"mycollect"
                        }, {
                            name: '回收站',
                            url:"recycleBin"

                        }]
                    },
                    {
                        name: '云管理',
                        child: [{
                            name: '高级查询'
                        }]
                    },
                    {
                        name: '系统设置',
                        child: [{
                            name: '项目需求管理'
                        }, {
                            name: '部门管理'
                        }, {
                            name: '系统管理'
                        }, {
                            name: '权限管理'
                        }, ]
                    },
                    {
                        name: '帮助',
                        child: [{
                            name: '帮助',
                            url:'help'
                        
                        }]
                    }
                ];

                $scope.sideList = $scope.navDict[0].child;
            },
            link: function ($scope) {
                // 点击顶部栏
                $scope.toptabClick=function(item){
                    $scope.sideList = item.child;
                    console.log($state);

                    
                };

                // 点击侧边栏目
                $scope.sidetabClick=function(item){
                    console.log($state);
                }

            }
        }
    });