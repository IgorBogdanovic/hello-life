$(window).on('load', function(){
	if($('.sticky-page').length) {
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
				.setPin("#stickySocial")
				//.addIndicators()
				.addTo(controller)
			}
	}
});



