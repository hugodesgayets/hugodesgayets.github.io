$(document).ready(function(){


	$(window).scroll(function(){

		var scroll = $(window).scrollTop();

		if (scroll >= 120) {
			$(".page-title-small").addClass("show");
			$(".inner").addClass("shadow");
		}
		else {
			$(".page-title-small").removeClass("show");
			$(".inner").removeClass("shadow");	
		}
	
	});



  // Retour en haut
  $(".top").click(function() {
    $('html, body').animate({
        scrollTop: $(".t").offset().top
    }, 1400);
  });


})  