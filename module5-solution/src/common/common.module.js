(function() {
"use strict";
//https://angularjs-course.herokuapp.com https://ychaikin-course5.herokuapp.com
angular.module('common', [])
.constant('ApiPath', 'https://angularjs-course.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
