var panelModule = angular.module('kityminderPanel', [
	'ui.bootstrap',
	'ui.colorpicker'
]);

panelModule.directive('kityminderPanel', ['config', function (config, minderService, revokeDialog) {
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
		}
	}
}]);