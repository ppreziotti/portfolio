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

$(window).on('scroll', function() {
	var currentPosition = $(window).scrollTop();
	$('.nav li a').each(function() {
		var navHeight = $('.navbar-nav').outerHeight() + 1;
		var sectionLink = $(this);
		var section = $(sectionLink.attr('href'));
		if (section.position().top - navHeight <= currentPosition && sectionLink.offset().top + section.height() >= currentPosition) {
			$('.nav li').removeClass('active');
			sectionLink.parent().addClass('active');
		}
		else {
			sectionLink.parent().removeClass('active');
		}
	});
});
