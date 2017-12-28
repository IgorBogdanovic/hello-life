$(window).on('load', function(){

	if($('.all-quiz-page').length) {
		var $allQuizMedia = $('.all-quiz-media'),
			$allQuizOverlay = $('.all-quiz-content__overlay'),
			$windowWidth = $(window).width(),
			$breakpoint = 750;

			if($windowWidth > $breakpoint) {
				$allQuizMedia.mouseover(function(){
					$(this).addClass('active');
					$allQuizOverlay.addClass('active');
				})

				$allQuizMedia.mouseout(function(){
					$(this).removeClass('active');
					$allQuizOverlay.removeClass('active');
				})
			}

			//Add random colors to each article
			var colors = ['blue', 'orange', 'green', 'red'];
			$allQuizMedia.each(function(){
				$(this).addClass(colors[Math.floor(Math.random() * colors.length)]);
			})
	}
});