$(document).ready(function() {

	$(".hide").hide();

    $('.One').click(function() {
        $(this).toggleClass('Two');
    });

    $('.s1').waypoint(function() {
  	$('#uva').fadeIn("slow");
  	});

  	$('.s2').waypoint(function() {
  	$('#oku').fadeIn("slow");
  	});

  	$('.s3').waypoint(function() {
  	$('#nd').fadeIn("slow");
  	});
    
});