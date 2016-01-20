var DorgkumCtrl = angular.module('DorgkumCtrl', []);

DorgkumCtrl.controller('HomeCtrl', function ($scope) {
  	$scope.greeting = '';
})
.controller('ProductCtrl', function($scope, $http){
	$scope.greeting = "Product : greetings friend";
	$("#owl-demo").owlCarousel({
	    items : 3,
	    autoPlay: true,
	    lazyLoad : true,
	  });
})
.controller('ContactUsCtrl', function($scope, $http){
	$scope.greeting = "Contact US : greetings friend";

	$scope.iniMap = function(){
		var myOptions = {
			zoom:18,center:new google.maps.LatLng(13.786476,100.66644),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
		marker = new google.maps.Marker({
			map: map,position: new google.maps.LatLng(13.786476,100.66644)
		});
		infowindow = new google.maps.InfoWindow({
			content:'<strong>Dorgkum</strong><br>Serithai<br>10240 Bangkok<br>'
		});
		google.maps.event.addListener(marker, 'click', function(){
			infowindow.open(map,marker);
		});
	};

	$scope.initGoogleMap = function(){
		google.maps.event.addDomListener(window, 'load', $scope.iniMap);
	};
});