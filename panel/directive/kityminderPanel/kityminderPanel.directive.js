angular.module('kityminderPanel', [
	'ui.bootstrap',
	'ui.colorpicker',
]).directive('kityminderPanel', ['$modal','$timeout', function ($modal,$timeout) {
	return {
		restrict: 'E',
		templateUrl: 'panel/directive/kityminderPanel/kityminderPanel.html',
		replace: true,
		controller: function ($scope, $element, $attrs, $transclude) {
			// 点击tab 选择
			$scope.select = function (item) {
				$scope.unSelectAll();
				item.active = true;
				$scope.current.name = item.name;
				console.log($scope.current.name);
			};

			// 取消选择所有tabs
			$scope.unSelectAll = function () {
				for (var i = 0; i < $scope.tabs.length; i++) {
					$scope.tabs[i].active = false;
				}
			};
			var current = $scope.current = {};

			// 顶部列表
			$scope.tabs = [{
					name: "open",
					active: false
				},
				{
					name: "saveas",
					active: false
				}, {
					name: "history",
					active: false
				}, {
					name: "help",
					active: false
				}, {
					name: "cloud",
					active: false
				}
			];

			// 监听点击其他地方，收起菜单栏
			angular.element('body')
				.on('click', '.minder-editor-container', function () {
					console.log($scope.current.name);
					$timeout(function(){
						$scope.current.name = '';
						}, 0)
				});

		},
		link: function ($scope) {
			var minder = $scope.minder;


			/**
			 *  点击‘导出到本地’按钮触发事件
			 */
			$scope.deriveMind = function () {

				var derive = {};

				var imageModal = $modal.open({
					animation: true,
					templateUrl: 'panel/dialog/derive/derive.tpl.html',
					controller: 'derive.ctrl',
					size: 'md',
					resolve: {
						derive: function () {
							return derive;
						}
					}
				});

				imageModal.result.then(function (result) {
					// minder.execCommand('image', result.url, result.title || '');
				});
			}


			/**
			 *  点击‘在本地打开’按钮触发事件
			 */
			$scope.importFile = function () {
				var importModal = $modal.open({
					animation: true,
					templateUrl: 'panel/dialog/importModal/importModal.tpl.html',
					controller: 'importModal.ctrl',
					size: 'md',
				});

				importModal.result.then(function (result) {
					// minder.execCommand('image', result.url, result.title || '');
				});
			}

		}
	}
}]);