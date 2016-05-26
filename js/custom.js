$(document).ready(function(){
	/*$("#langEn").css('width', '15%');
	$("#langTh").css('width', '10%');*/

	$('#brand').click(function(){
		$('#brand').removeClass('animated flash');
		$("#mainMenu li a").removeClass('activeC');
		$("#home").addClass('activeC animated zoomIn');
		$("#home").css('outline','0');
		$(this).addClass('animated flash');
		// return;
	});

	$("#mainMenu li a").click(function(){
		$("#mainMenu li a").removeClass('activeC animated zoomIn');
		$(this).addClass('activeC animated zoomIn');
		$(this).css('outline','0');
		// return; 
	});
});


