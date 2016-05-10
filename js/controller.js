var DorgkumCtrl = angular.module('DorgkumCtrl', []);

DorgkumCtrl.controller('HomeCtrl', function ($scope, $route, $routeParams, $location, $http, Lang) {
  	$scope.greeting = '';
  	$scope.Objlang = Lang;
  	$scope.currLang = '';

  	console.log('Paht=' + $location.path());

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

  	$scope.gotoNextPage = function(nextPageName){
  		console.log('gotoNextPage name :: ' + nextPageName);
  		$("#mainMenu li a").removeClass('activeC animated zoomIn');
  		$('#' + nextPageName).addClass('activeC animated zoomIn');
		$('#' + nextPageName).css('outline','0');
  		$location.path(nextPageName);
  	};

    $http.get("data/home.json")
    .then(function(response) {
      console.log('response=' + response.data.info[0].text);
      $scope.content = response.data.info[0].text;
        // $scope.content = response.GetAllCustomersResult.CompanyName;
        // $scope.statuscode = response.GetAllCustomersResult.CustomerID;
        // console.log('Data : ' + $scope.content + $scope.statuscode);
    });

})
.controller('WhoamiCtrl', function($scope, $http, $location, Lang){
	$scope.greeting = "WhoamiCtrl : greetings friend";

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