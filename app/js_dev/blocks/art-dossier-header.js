$(window).on('load', function(){

	if($('.article-dossier-page').length) {
		var $artDossierHeader = $('.art-dossier-header'),
			$artDossierHeaderSlider = $('.art-dossier-header__slider'),
			$artDossierHeaderTrigger = $('.art-dossier-header__trigger'),
			$artDossierHeaderSliderWrap = $('.art-dossier-header__slider-wrap'),
			$artDossierHeaderSliderArrowLeft = $artDossierHeaderSliderWrap.find('.c-arrow--left'),
			$artDossierHeaderSliderArrowRight = $artDossierHeaderSliderWrap.find('.c-arrow--right'),
			$artDossierHeaderSliderImg = $('.art-dossier-header__slider-slide-img'),
			$windowWidth = $(window).width(),
			$breakpoint = 750;


		if($windowWidth <= $breakpoint) {
			//Initialize slider for mobile
			$artDossierHeaderSlider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
				arrows: false
			});

			//Expand header on click
			$artDossierHeaderTrigger.click(function(){
				$artDossierHeader.animate()
				$artDossierHeader.toggleClass('active');
			})
		}
		else {
			//Initialize slider for desktop
			$artDossierHeaderSlider.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: $artDossierHeaderSliderArrowLeft,
				nextArrow: $artDossierHeaderSliderArrowRight
			});

			// $check = $('.art-dossier-header__slider-slide');
			// $check.hover(function(){
			// 	$artDossierHeader.toggleClass('activeDesk');
			// 	$(this).find('h3').toggleClass('active');
			// })

			//Expand header on hover
			$artDossierHeaderSliderImg.hover(function(){
				$artDossierHeader.toggleClass('activeDesk');
				$(this).siblings('.art-dossier-header__slider-slide-body').find('h3').toggleClass('active');
			})

			//Sticky social 
			var $articleText = $('.article-content__text'),
				$articleTextHeight = $articleText.height(),
				$social = $('.c-social'),
				$socialArrow = $social.find('.c-arrow'),
				$socialArrowHeight = $socialArrow.outerHeight(true),
				$stickyDuration = $articleTextHeight - $socialArrowHeight;
				$windowWidth = $(window).width(),
				$breakpoint = 750;

			if($windowWidth > $breakpoint) {
				var controller = new ScrollMagic.Controller();
				var scene = new ScrollMagic.Scene({
					triggerElement: ".article-content__text", 
					duration: $stickyDuration,
					triggerHook: (0.072)
				})
				.setPin("#stickySocialDossier")
				//.addIndicators()
				.addTo(controller)
			}

			//Back to top on arrow click
			var $page = $('html, body');
			$socialArrow.click(function(){
				$page.animate({ scrollTop: 0 }, "slow");
				return false;
			})

		}
	}
});


