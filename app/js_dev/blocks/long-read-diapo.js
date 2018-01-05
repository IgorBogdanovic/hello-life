$(document).ready(function() {

	if($('.long-read__diapo-sec__slider').length) {

		var longReadSlider = $('.long-read__diapo-sec__slider__carousel'),
			longReadSliderLeftArrow = $('.long-read__diapo-sec__slider .c-arrow--left'),
			longReadSliderRightArrow = $('.long-read__diapo-sec__slider .c-arrow--right'),
			longReadSliderSlideImg = $('.long-read__diapo-sec__slider__carousel__slide img'),
			longReadSliderSlidePopUpClose = $('.long-read__diapo-sec__slider__carousel__slide__pop-up__close'),

			$windowWidth = $(window).width(),
			$breakpoint = 750;

		
		longReadSlider.slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		longReadSliderLeftArrow.on('click', function() {
		    longReadSlider.slick('slickPrev');
		});

		longReadSliderRightArrow.on('click', function() {
		    longReadSlider.slick('slickNext');
		});

		if($windowWidth <= $breakpoint) {

			longReadSliderSlideImg.click(
				function() {
					$(this).parent().next().show('fade', 500);
				}
			);

			longReadSliderSlidePopUpClose.click(
				function() {
					$(this).parent().hide('fade', 500);
				}
			);

		} else {

			longReadSliderSlideImg.mouseenter(
				function() {
					$(this).parent().next().addClass('active').show('fade', 500);
				}
			);

			longReadSliderSlideImg.mouseleave(
				function() {
					$(this).parent().next().removeClass('active').hide('fade', 500);
				}
			);

		}

	}
	
});
