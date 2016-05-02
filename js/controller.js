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
		animateOut: 'fadeOut',
	    items : 1,
	    autoPlay: true,
	  });

	$('.owl-carousel').owlCarousel({
	    animateOut: 'zoomOut',
	    animateIn: 'zoomIn',
	    autoPlay: 4000,
	    nav:true,
	    items:1,
	    margin:30,
	    stagePadding:30,
	    smartSpeed:800
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
.controller('TaewPageCtrl', function($scope, $timeout, $interval, $animate, RandomColor){
	$scope.imgPath = "img/happy-birthday-round-cake.jpg";
	var i = 0;
	var msg = ['สวัสดีแต้ว', 'สุขสันต์วันคล้ายวันเกิดนะ', 'ขอให้สุขภาพแข็งแรง', 'อย่าเจ็บ อย่าทน  เอ้ย!!! อย่าจน', 'คิด หวัง อะไร ขอให้เป็นดั่งหวัง', 'ดูแลตัวเองดี ๆ ', 'ขับรถดี ๆ', 'เอาไว้ จะหาโอกาสไปเลี้ยงข้าวคืนนะ', 'คิดถึงจร้า บาย'];
	$scope.color = '';

	$("#mainTaew").owlCarousel({
	   items:1,
    	loop:true,
    	margin:10,
    	lazyLoad:true,
    	loop:true,
    	autoplay:true,
    	autoplayTimeout:1500,
    	autoplayHoverPause:true
	  });

	$interval(function(){
		$scope.greetingTaew = msg[i%9];
		$scope.color =  {'color':RandomColor.getColor()};
		$scope.bgcolor1 =  {'background-color':RandomColor.getColor()};
		$scope.bgcolor2 =  {'background-color':RandomColor.getColor()};
		$scope.bgcolor3 =  {'background-color':RandomColor.getColor()};
		$scope.bgcolor4 =  {'background-color':RandomColor.getColor()};
		$scope.bgcolor5 =  {'background-color':RandomColor.getColor()};
		$scope.bgcolor6 =  {'background-color':RandomColor.getColor()};
		i++;
	}, 2000, 9, true, null);
	
	$scope.mouseD = function(ele){
		$scope.imgPath = "img/un.jpg";
  	};

  	$scope.mouseU = function(ele){
		$scope.imgPath = "img/happy-birthday-round-cake.jpg";
  	};
});