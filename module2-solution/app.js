(function () {
	'use strict';
	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var ctrl = this;

		ctrl.items = ShoppingListCheckOffService.getBuyItems();

		ctrl.buyItem = function(index) {
			ShoppingListCheckOffService.buyItem(index);
		};
	};

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var ctrl = this;

		ctrl.items = ShoppingListCheckOffService.getBoughtItems();
	};

	function ShoppingListCheckOffService() {
		var service = this;
		var toBuyList = [
			{name: "cookies", quantity: 10},
			{name: "beer", quantity: 8},
			{name: "pizza", quantity: 1},
			{name: "cola", quantity: 2},
			{name: "nuts", quantity: 20}
		];
		var boughtList = [];

		service.buyItem = function(index) {
			boughtList.push(toBuyList.splice(index, 1)[0]);
		};

		service.getBuyItems = function() {
			return toBuyList;
		}

		service.getBoughtItems = function() {
			return boughtList;
		}
	}
	

})();