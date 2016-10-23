(function () {
	'use strict';
	angular.module('NarrowItDownApp', [])
		.controller('NarrowItDownController', NarrowItDownController)
		.service('MenuSearchService', MenuSearchService)
		.directive('foundItems', FoundItemsDirective)
		.constant('url', 'https://davids-restaurant.herokuapp.com/menu_items.json');

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var ctrl = this;

		ctrl.searchTerm = '';
		ctrl.isEmpty = false;

		ctrl.search = function () {
			if(!ctrl.searchTerm) {ctrl.found = []; ctrl.isEmpty = true}
			else MenuSearchService
				.getMatchedMenuItems(ctrl.searchTerm)
				.then(function (result) {
					ctrl.found = result;
					ctrl.isEmpty = result.length?false:true;
				});
		};

		ctrl.remove = function (index) {
			ctrl.found.splice(index, 1);
		};
	};

	MenuSearchService.$inject = ['$http', 'url'];
	function MenuSearchService($http, url) {
		var service = this;

		service.getMatchedMenuItems = function (searchTerm) {
			return $http({
				method: "GET",
				url: url
			}).then(function (result) {
				return result.data.menu_items.filter(function (item) {
					return item.description.indexOf(searchTerm) !== -1;
				});
			});
		};
	};

	function FoundItemsDirective() {
		var ddo = {
			restrict: 'E',
			templateUrl: 'foundItems.html',
			scope: {
				foundItems: '<',
				onRemove: '&'
			},
			controller: NarrowItDownController,
			controllerAs: 'ctrl',
			bindToController: true
		};

		return ddo;
	};


})();