$(window).on('load', function(){

	if($('.article-diapo_page').length) {
		var $articleSlider = $('.article-content__text-slider'),
			$articleSliderWrap = $('.article-content__text-slider-wrap'),
			$articleSliderArrowLeft = $articleSliderWrap.find('.c-arrow--left'),
			$articleSliderArrowRight = $articleSliderWrap.find('.c-arrow--right');

			//Initialize slider
			$articleSlider.slick({
				draggable: false,
				swipe: false,
				arrows: true,
				prevArrow: $articleSliderArrowLeft,
				nextArrow: $articleSliderArrowRight
			});
	}
});