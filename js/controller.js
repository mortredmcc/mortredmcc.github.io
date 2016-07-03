var DorgkumCtrl = angular.module('DorgkumCtrl', []);

DorgkumCtrl.controller('HomeCtrl', function ($scope, $route, $routeParams, $location, $interval, Lang) {
  	$scope.greeting = '';
  	$scope.Objlang = Lang;
  	$scope.currLang = '';

  	$("#langEn").click(function(){
		$("#langEn").css('width', '15%');
		$("#langTh").css('width', '10%');
		$scope.Objlang.setLang('en');
	});

	$("#langTh").click(function(){
		$("#langEn").css('width', '10%');
		$("#langTh").css('width', '15%');
		$scope.Objlang.setLang('th');
	});

  	$scope.switchLang = function(lang){
  		console.log('lang' + lang);
  		/*$scope.Objlang.setLang(lang);
  		console.log($scope.Objlang.getLang();*/
  	};

  	$scope.gotoNextPage = function(nextPageName){
  		console.log('gotoNextPage name :: ' + nextPageName);
  		$("#mainMenu li a").removeClass('activeC animated zoomIn');
  		$('#' + nextPageName).addClass('activeC animated zoomIn');
		$('#' + nextPageName).css('outline','0');
  		$location.path(nextPageName);
  	};

   var hbd_txt = ["สุขสันต์วันคล้ายวันเกิดนะ", "หว่า!!! อายุบวกไปอีก 1 ละนะ", "ขอให้มีความสุขมาก ๆ", "ดูแลตัวเองดี ๆ", "ดื่มให้น้อย ๆ ลงหน่อยนะ", "เห็นแทบทุกวันเลย ^ ^","ออกกำลังกายบา้งนะ", "บ๊ะ บาย"]
   var counter = 0;
   var iMax = hbd_txt.length;
   $interval(function() {
       $scope.greeting = hbd_txt[counter++]; 
       if(counter === iMax)
          counter = 0;
    }, 1800);

})
.controller('WhoamiCtrl', function($scope, $http, $location, $http, Lang){
	$scope.greeting = "WhoamiCtrl : greetings friend";
  var prefix = '<div class="item"><img class="animated ';
  var classD = ' infinite" src="';
  var middlefix = '"><p>';
  var suffix = '</p></div>';
  var content = '';
	$http.get("data/home.json").then(function(response) {
    angular.forEach(response.data.info, function(value, key) {
       content += prefix + value.anim + classD + value.img + middlefix + value.text  + suffix;    
    }, null);
    $('.owl-carousel').html(content);
    $('.owl-carousel').owlCarousel({
      margin:10,
      lazyLoad: true,
      navContainer : false,
      loop:true,
      items:1
  });
  }, function errorCallback(response) {
   console.log('Error=' + response);
  });

  // $http.post("https://photos.google.com/photo/AF1QipNuTty9SgrvYkfDovlJlToHUUerQZbzSArhgHS9").then(function(response) {
  //   console.log('successful');
  // }, function errorCallback(response) {
  //  console.log('Error=' + angular.toJson(response, null));
  // });

// https://photos.google.com/photo/AF1QipNuTty9SgrvYkfDovlJlToHUUerQZbzSArhgHS9

	$scope.gotoNextPage = function(nextPageName){
  		console.log('gotoNextPage name :: ' + nextPageName);
  		$("#mainMenu li a").removeClass('activeC animated zoomIn');
  		$('#' + nextPageName).addClass('activeC animated zoomIn');
		$('#' + nextPageName).css('outline','0');
  		$location.path(nextPageName);
  	};
})
.controller('ContactUsCtrl', function($scope, $http, $location,Lang){
	$scope.greeting = "Contact US : greetings friend";

	$scope.gotoNextPage = function(nextPageName){
  		console.log('gotoNextPage name :: ' + nextPageName);
  		$("#mainMenu li a").removeClass('activeC animated zoomIn');
  		$('#' + nextPageName).addClass('activeC animated zoomIn');
		$('#' + nextPageName).css('outline','0');
  		$location.path(nextPageName);
  	};
})
.controller('FuturePageCtrl', function($scope, $location){
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

  	$scope.gotoNextPage = function(nextPageName){
  		console.log('gotoNextPage name :: ' + nextPageName);
  		$("#mainMenu li a").removeClass('activeC animated zoomIn');
  		$('#' + nextPageName).addClass('activeC animated zoomIn');
		$('#' + nextPageName).css('outline','0');
  		$location.path(nextPageName);
  	};
})
.controller('XcuPageCtrl', function($scope, $location){
	$scope.greetingXcu = "สวัสดีครับ...";

	$scope.gotoNextPage = function(nextPageName){
  		console.log('gotoNextPage name :: ' + nextPageName);
  		$("#mainMenu li a").removeClass('activeC animated zoomIn');
  		$('#' + nextPageName).addClass('activeC animated zoomIn');
		$('#' + nextPageName).css('outline','0');
  		$location.path(nextPageName);
  	};
});