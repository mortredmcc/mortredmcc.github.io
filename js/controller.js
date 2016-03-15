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
.controller('FuturePageCtrl', function($scope){
	$scope.greeting = "Xcu : greetings friend";
	$scope.myInterval = 5000;
  	$scope.noWrapSlides = false;
  	$scope.active = 0;
  	var slides = $scope.slides = [];
  	var currIndex = 0;

  	$scope.addSlide = function() {
  	  var newWidth = 600 + slides.length + 1;
  	  slides.push({
  	    image: 'http://lorempixel.com/' + newWidth + '/300',
   	   text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
 	     id: currIndex++
 	  });
 	};

 	for (var i = 0; i < 4; i++) {
   	 $scope.addSlide();
  	}
})
.controller('XcuPageCtrl', function($scope){
	$scope.greetingXcu = "สวัสดีครับ...";
})
.controller('TaewPageCtrl', function($scope, $timeout, $interval, RandomColor){
	var i = 0;
	var msg = ['Hi', 'My name is Xcu.', 'What is your name', 'Oop!!', 'Taew', 'Goo bye'];
		$scope.color = '';
		$interval(function(){
			$scope.greetingTaew = msg[i%5]
			$scope.color =  {color:RandomColor.getColor()};
			i++;
		}, 2000, 100, true, null);
});