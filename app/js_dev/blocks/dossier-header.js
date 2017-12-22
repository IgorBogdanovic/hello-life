$(document).ready(function() {

	if($('.dossier-header').length) {

		var dossierHeaderTagLi = $('.dossier-header__info__tags__list__li'),
			dossierHeaderTagLiLink = $('.dossier-header__info__tags__list__li__link');

		dossierHeaderTagLiLink.click(

			function() {
				$('.dossier-header__info__tags__list__li.active').removeClass('active');
				$(this).parent().addClass('active');
			}

		);

	}
	
});
