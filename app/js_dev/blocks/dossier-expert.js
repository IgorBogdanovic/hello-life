$(document).ready(function() {

	if($('.dossier-expert').length) {

		var dossierExpertSlider = $('.dossier-expert__slider__carousel');

		dossierExpertSlider.slick({
			arrows: false,
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});

	}
	
});
