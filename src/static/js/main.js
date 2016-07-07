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




  // Typed.js
      $(function(){
        $("#typed").typed({
            strings: ["hello.^1000 my name is hugo.<br> ^1000 i am a paris based interaction designer with a strong focus on usability."],
            typeSpeed: 10,
            backDelay: 2000,
        });
    });





})  