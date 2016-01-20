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

});


