$(document).ready(function(){


	$(window).scroll(function(){

		var scroll = $(window).scrollTop();

		if (scroll >= 120) {
			$(".page-title-small").addClass("show");
		}
		else {
			$(".page-title-small").removeClass("show");		
		}
	
	});



  // Retour en haut
  $(".top").click(function() {
    $('html, body').animate({
        scrollTop: $(".t").offset().top
    }, 1400);
  });


})  