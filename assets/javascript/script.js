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

function changeJumbotronImage() {
	var images = ['StockSnap_LI3Y5U376X.jpg', 'StockSnap_CWYK8CLC61.jpg', 'StockSnap_DKNN0YHNEE.jpg', 'StockSnap_UQ9AB8NRV9.jpg'];
	var currentIndex = 0;
	setInterval(function() {
		if (currentIndex === images.length) {
			currentIndex = 0;
		}
		$('.jumbotron').css('background-image', 'url("assets/images/' + images[currentIndex++] + '")');
	}, 3000);
}

$(document).ready(function() {
	changeJumbotronImage();
});
