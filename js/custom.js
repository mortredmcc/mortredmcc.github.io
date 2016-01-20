$(document).ready(function(){

	// $("#mainMenu li").click(function(){
	// 	$("#mainMenu li").removeClass('activeC');
	// 	$(this).addClass('activeC');
	// 	$(this).css('outline','0');    
	// });

	$('#brand').click(function(){
		$("#mainMenu li a").removeClass('activeC');
		$("#home").addClass('activeC');
		$("#home").css('outline','0');
	});

	$("#mainMenu li a").click(function(){
		$("#mainMenu li a").removeClass('activeC');
		$(this).addClass('activeC');
		$(this).css('outline','0');
		return; 
	});

	google.maps.event.addDomListener(window, 'load', init_map);
});

function init_map(){
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
	infowindow.open(map,marker);}


