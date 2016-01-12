var dorgkumApp = angular.module('dorgkumApp', [
	'ngRoute',
  'ui.bootstrap',
  'ngAnimate',
  'DorgkumCtrl']);
dorgkumApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }).
      when('/product', {
        templateUrl: 'templates/product.html',
        controller: 'ProductCtrl'
      }).
       when('/contactus', {
        templateUrl: 'templates/contactus.html',
        controller: 'ContactUsCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);