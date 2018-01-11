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

			//Sticky social
			var $articleText = $('.article-content__text'),
			$articleTextTop = $articleText.offset().top,
			$articleTextQuote = $('.article-content__text-quote'),
			$articleTextQuoteTop = $articleTextQuote.offset().top,
			$social = $('.c-social'),
			$socialHeight = $social.height(),
			$stickyDuration = $articleTextQuoteTop - $articleTextTop -$socialHeight;
			$windowWidth = $(window).width(),
			$breakpoint = 750;
			console.log($stickyDuration);

			if($windowWidth > $breakpoint) {
				var controller = new ScrollMagic.Controller();
				var scene = new ScrollMagic.Scene({
					triggerElement: ".article-content__trigger", 
					duration: $stickyDuration,
					triggerHook: 0
				})
				.setPin("#diapoStickySocial")
				//.addIndicators()
				.addTo(controller)
			}
	}
});
