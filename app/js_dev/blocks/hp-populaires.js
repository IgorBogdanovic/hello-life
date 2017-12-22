$(window).on('load', function(){

	if($('.hp-populaires').length) {
		var $hpPopulairesSlider = $('.hp-populaires__slider');

		$hpPopulairesSlider.slick({
			arrows: false,
			fade: true,
			dots: true
		});
	}
});