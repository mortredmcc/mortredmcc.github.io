$(document).ready(function(){
	$("#langEn").css('width', '15%');
	$("#langTh").css('width', '10%');

	$('#brand').click(function(){
		console.log('click');
		$("#mainMenu li a").removeClass('activeC');
		$("#home").addClass('activeC');
		$("#home").css('outline','0');
		$("#c").removeClass('animated flash');
		$("#c").addClass('animated flash');
	});

	$("#mainMenu li a").click(function(){
		$("#mainMenu li a").removeClass('activeC animated zoomIn');
		$(this).addClass('activeC animated zoomIn');
		$(this).css('outline','0');
		return; 
	});

	$("#langEn").click(function(){
		$("#langEn").css('width', '15%');
		$("#langTh").css('width', '10%');
	});

	$("#langTh").click(function(){
		$("#langEn").css('width', '10%');
		$("#langTh").css('width', '15%');
	});
});


