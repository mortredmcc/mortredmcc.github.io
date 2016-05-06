var dorgkumApp = angular.module('dorgkumApp', [
	'ngRoute',
  'ngTouch',
  'ui.bootstrap',
  'ngAnimate',
  'DorgkumCtrl',
  'DorgkumService']);
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
       when('/futurepage', {
        templateUrl: 'templates/futurePage.html',
        controller: 'FuturePageCtrl'
      }).
       when('/xcu', {
        templateUrl: 'templates/xcuPage.html',
        controller: 'XcuPageCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);