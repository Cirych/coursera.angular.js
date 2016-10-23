(function () {
	'use strict';
	angular.module('NarrowItDownApp', [])
		.controller('NarrowItDownController ', NarrowItDownController)
		.service('MenuSearchService', MenuSearchService);

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var ctrl = this;

		ctrl.items = function (searchTerm) {
			MenuSearchService.getMatchedMenuItems(searchTerm);
		};
	};


	function MenuSearchService() {
		var service = this;
	}


})();