$(document).ready(function(){

	 $("#mainMenu li a").click(function(){
	    $("#mainMenu li a").removeClass('active');
	    $(this).addClass('active');
	    $(this).css('text-decoration','none');
	    $('#brand').focus();
	  });

	  $("#owl-example").owlCarousel();
	  console.log("end.");
});
