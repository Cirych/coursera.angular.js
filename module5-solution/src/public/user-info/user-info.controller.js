(function() {
    "use strict";

    angular.module('public')
        .controller('UserInfoController', UserInfoController);

    UserInfoController.$inject = ['MenuService', 'UserInfoService'];
    function UserInfoController(MenuService, UserInfoService) {
        var $ctrl = this;
        $ctrl.registered = UserInfoService.getRegistered();

        if ($ctrl.registered === true) {
            $ctrl.userinfo = UserInfoService.getUserInfo();
        }
    }

})();