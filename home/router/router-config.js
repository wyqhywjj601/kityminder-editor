    'use strict';

    //添加路由
    var mindManage = angular.module('mindManage');

    mindManage.config(function ($stateProvider, $urlRouterProvider) {

        console.log('router running',$urlRouterProvider);
        $stateProvider
            // 我的脑图
            .state('selfMind', {
                url: '/selfMind',
                templateUrl: 'home/directive/self/selfMind/selfMind.html',
                controller: 'selfMindCtrl'
            })
             
            // 我的分享
            .state('myshare', {
                url: '/myshare',
                templateUrl: 'home/directive/self/myshare/myshare.html',
                controller: 'myshareCtrl'
            })
                        
            // 我的收藏
            .state('mycollect', {
                url: '/mycollect',
                templateUrl: 'home/directive/self/mycollect/mycollect.html',
                controller: 'mycollectCtrl'
            })

            // 回收站
            .state('recycleBin', {
                url: '/recycleBin',
                templateUrl: 'home/directive/self/recycleBin/recycleBin.html',
                controller: 'recycleBinCtrl'
            })

                 // 帮助
                 .state('help', {
                    url: '/help',
                    templateUrl: 'home/directive/self/help/help.html',
                    controller: 'helpCtrl'
                });
            
    });
