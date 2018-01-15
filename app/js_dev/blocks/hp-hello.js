$(document).ready(function() {

	if($('.hp-hello').length) {

		var helloSlider = $('.hp-hello__slider__carousel'),
			helloSliderSlide = $('.hp-hello__slider__carousel__slide'),
			helloSliderRightArrow = $('.hp-hello__slider__buttons .c-arrow--right'),
			helloSliderLeftArrow = $('.hp-hello__slider__buttons .c-arrow--left'),
			menuTab = $('.hp-hello__menu__list__li');

			$windowWidth = $(window).width(),
			$breakpoint = 750;

		if($windowWidth <= $breakpoint) {

			helloSlider.slick({
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true
			});

		} else {

			helloSlider.slick({
				arrows: false,
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 3,
				variableWidth: true
			});

		}

		function helloSliderSlidesCheck() {

			var helloSliderPrevSlides = $('.hp-hello__slider__carousel.active').find('.active').prevAll().length;
			var helloSliderNextSlides = $('.hp-hello__slider__carousel.active').find('.active').nextAll().length;

			if (helloSliderPrevSlides >= 3) {

				helloSliderLeftArrow.show();

				if (helloSliderRightArrow.is(':visible')) {
					helloSliderRightArrow.addClass('active');
					helloSliderLeftArrow.addClass('active');
				}

			} else {

				helloSliderLeftArrow.hide().removeClass('active');
				helloSliderRightArrow.removeClass('active');

			}

			if (helloSliderNextSlides >= 3) {

				helloSliderRightArrow.show();

				if (helloSliderLeftArrow.is(':visible')) {
					helloSliderLeftArrow.addClass('active');
					helloSliderRightArrow.addClass('active');
				}

			} else {

				helloSliderRightArrow.hide();
				helloSliderLeftArrow.removeClass('active');

			}
		}

		helloSliderSlidesCheck();

		helloSlider.on('beforeChange', function(){

			$(this).find('.hp-hello__slider__carousel__slide.slick-active').removeClass('active');

		}).on('afterChange', function(){

			$(this).find('.hp-hello__slider__carousel__slide.slick-active').addClass('active');
			helloSliderSlidesCheck();

		});

		helloSliderRightArrow.on('click', function() {
		    $('.hp-hello__slider__carousel.active').slick('slickNext');
		});

		helloSliderLeftArrow.on('click', function() {
		    $('.hp-hello__slider__carousel.active').slick('slickPrev');
		});

		menuTab.on('click', function() {
			var menuTabActive = $('.hp-hello__menu__list__li.active'),
				helloSliderActive = $('.hp-hello__slider__carousel.active'),
				menuTabActiveIndex,
				helloSliderToBeActive;

			menuTabActive.removeClass('active');
		    $(this).addClass('active');

		    menuTabActiveIndex = $(this).index();
		    helloSliderToBeActive = helloSlider.eq(menuTabActiveIndex);

		    helloSliderActive.removeClass('visible').addClass('hidden');

		    setTimeout(function () {
		        helloSliderActive.removeClass('active').addClass('inactive');
		    }, 500);

		    setTimeout(function () {
		        helloSliderToBeActive.removeClass('inactive').addClass('active');
		        helloSliderToBeActive.removeClass('hidden').addClass('visible');
		        helloSliderSlidesCheck();
		    }, 500);
		});

	}
	
});
