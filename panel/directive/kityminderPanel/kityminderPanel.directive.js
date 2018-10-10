angular.module('kityminderPanel', [
	'ui.bootstrap',
	'ui.colorpicker',
	'kityminderEditor'
]).directive('kityminderPanel', ['$modal', function ($modal) {
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
			$scope.current = {};

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
		},
		link: function ($scope) {
			var minder = $scope.minder;

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
					minder.execCommand('image', result.url, result.title || '');
				});
			}

		}
	}
}]);