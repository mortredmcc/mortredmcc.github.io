var DorgkumCtrl = angular.module('DorgkumCtrl', []);

DorgkumCtrl.controller('HomeCtrl', function ($scope, Lang) {
  	$scope.greeting = '';
  	$scope.Objlang = Lang;
  	$scope.currLang = '';

  	$("#langEn").click(function(){
		$("#langEn").css('width', '15%');
		$("#langTh").css('width', '10%');
		$scope.Objlang.setLang('en');
		console.log('Lang :: ' + $scope.Objlang.getLang());
	});

	$("#langTh").click(function(){
		$("#langEn").css('width', '10%');
		$("#langTh").css('width', '15%');
		$scope.Objlang.setLang('th');
		console.log('Lang :: ' + $scope.Objlang.getLang());
	});

  	$scope.switchLang = function(lang){
  		console.log('lang' + lang);
  		/*$scope.Objlang.setLang(lang);
  		console.log($scope.Objlang.getLang();*/
  	};

})
.controller('ProductCtrl', function($scope, $http, Lang){
	$scope.greeting = "Product : greetings friend";

	/*$scope.switchLang = function(lang){
  		Lang.setLang(lang);
  		console.log(Lang.getLang();
  	};*/

	$("#owl-demo").owlCarousel({
	    items : 3,
	    autoPlay: true,
	    lazyLoad : true,
	  });
})
.controller('ContactUsCtrl', function($scope, $http, Lang){
	$scope.greeting = "Contact US : greetings friend";

	/*$scope.switchLang = function(lang){
  		Lang.setLang(lang);
  		console.log(Lang.getLang();
  	};*/

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
})

.controller('Future', function($scope, Lang){
	$scope.greeting = "Product : greetings friend";
});