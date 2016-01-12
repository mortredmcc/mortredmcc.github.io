var DorgkumCtrl = angular.module('DorgkumCtrl', []);

DorgkumCtrl.controller('HomeCtrl', function ($scope) {
  	$scope.greeting = '';
})
.controller('ProductCtrl', function($scope, $http){
	$scope.greeting = "Product : greetings friend";
	$scope.myInterval = 4000;
	$scope.noWrapSlides = false;
	var slides = $scope.slides = [];
	var url = 'data/img.json';
	$http.get(url).success( function(response) {
      $scope.slides = response; 
   });
})
.controller('ContactUsCtrl', function($scope, $http){
	$scope.greeting = "Contact US : greetings friend";
});