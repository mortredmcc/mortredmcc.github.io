$(document).ready(function(){
	$("#langEn").css('width', '15%');
	$("#langTh").css('width', '10%');

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

	$("#langEn").click(function(){
		$("#langEn").css('width', '15%');
		$("#langTh").css('width', '10%');
	});

	$("#langTh").click(function(){
		$("#langEn").css('width', '10%');
		$("#langTh").css('width', '15%');
	});

});


