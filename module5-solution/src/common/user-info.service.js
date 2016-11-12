(function () {
	"use strict";

	angular.module('common')
		.service('UserInfoService', UserInfoService);

	function UserInfoService() {
		var service = this;
		service.registered = false;

		service.saveUserInfo = function (userinfo) {
			service.userinfo = userinfo;
			service.registered = true;
		};

		service.getUserInfo = function () {
			return service.userinfo;
		};

		service.getRegistered = function () {
			return service.registered;
		}
	}

})();