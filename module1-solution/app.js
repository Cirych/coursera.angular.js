(function () {
	'use strict';
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.lunchMenu = "";
		$scope.message = "";
		$scope.check = function() {
			var items = $scope.lunchMenu
						.trim()
						.split(',')
						.filter(({length}) => length)
						.length;
			$scope.message = !items
					?'Please enter data first'
					:items < 4
						?'Enjoy!'
						:'Too much!';
		}
	}
})();