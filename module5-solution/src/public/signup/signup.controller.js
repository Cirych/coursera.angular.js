(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserInfoService'];
function SignUpController(MenuService, UserInfoService) {
  var $ctrl = this;
  $ctrl.userinfo = {};
  $ctrl.favoriteNotFound = false;
  $ctrl.saved = false;

  $ctrl.checkFavorite = function() {
    if (!$ctrl.favorite) {
      $ctrl.favoriteNotFound = true;
      return;
    }

    return MenuService.getMenuItem($ctrl.favorite.toUpperCase())
    .then(function (response) {
      $ctrl.userinfo.favoriteMenuItem = response;
      $ctrl.favoriteNotFound = false;
    })
    .catch(function() {
      $ctrl.favoriteNotFound = true;
    });
  };

  $ctrl.submit = function() {
    $ctrl.checkFavorite().then(function() {
      UserInfoService.saveUserInfo($ctrl.userinfo);
      $ctrl.saved = true;
    });
  }
}


})();