$('#contact-btn').on('click', function() {
	$('html, body').animate({
		scrollTop: $('#contact').offset().top
	}, 200);
});

$("#portfolio-btn").on('click', function(){
	$('html, body').animate({
		scrollTop: $('#portfolio').offset().top
	}, 200);
});

$("#about-btn").on('click', function() {
	$('html, body').animate({
		scrollTop: $('#about').offset().top
	}, 200);
});