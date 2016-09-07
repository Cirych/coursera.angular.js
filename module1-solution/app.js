(function () {
	'use strict';
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.lunchMenu = "";
		$scope.message = "";
		$scope.color = "white";
		$scope.check = function() {
			var items = $scope.lunchMenu
						.trim()
						.split(',')
						.filter(({length}) => length)
						.length;
			$scope.message = !items
					?($scope.color = 'red', 'Please enter data first')
					:($scope.color = 'green', items < 4
						?'Enjoy!'
						:'Too much!');
		}
	}
})();