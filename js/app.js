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
      when('/whoami', {
        templateUrl: 'templates/whoami.html',
        controller: 'WhoamiCtrl'
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