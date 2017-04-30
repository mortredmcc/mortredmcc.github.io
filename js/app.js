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
        when('/view', {
        templateUrl: 'templates/view.html',
        controller: 'ViewPageCtrl'
      }).
         when('/sand', {
        templateUrl: 'templates/sand.html',
        controller: 'SandPageCtrl'
      }).
      when('/fang', {
        templateUrl: 'templates/fang.html',
        controller: 'FangPageCtrl'
      }).
       when('/tik', {
        templateUrl: 'templates/tik.html',
        controller: 'TikPageCtrl'
      }).
      otherwise({
        redirectTo: '/xcu'
      });
  }]);

dorgkumApp.filter('newlines', function () {
  return function(text) {
    return text.replace(/(&#13;)?&#10;/g, '<br/>');
  }
});