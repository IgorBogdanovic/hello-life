$(document).ready(function() {

	if($('.c-pagination').length) {

		var paginationDirPrev = $('.c-pagination__page--prev'),
			paginationDirNext = $('.c-pagination__page--next'),
			paginationPage = $('.c-pagination__page-list__li');

		paginationDirPrev.click(

			function() {
				if ($('.c-pagination__page-list__li.active').is(':last-child')) {
					paginationDirNext.removeClass('hidden');
				}

				$('.c-pagination__page-list__li.active').removeClass('active').prev().addClass('active');

				if ($('.c-pagination__page-list__li.active').is(':first-child')) {
					$(this).addClass('hidden');
					return false;
				}
			}

		);

		paginationDirNext.click(

			function() {
				if ($('.c-pagination__page-list__li.active').is(':first-child')) {
					paginationDirPrev.removeClass('hidden');
				}

				$('.c-pagination__page-list__li.active').removeClass('active').next().addClass('active');

				if ($('.c-pagination__page-list__li.active').is(':last-child')) {
					$(this).addClass('hidden');
					return false;
				}
			}

		);

		paginationPage.click(

			function() {
				if ($('.c-pagination__page-list__li.active').is(':first-child')) {
					paginationDirPrev.removeClass('hidden');
				} else if ($('.c-pagination__page-list__li.active').is(':last-child')) {
					paginationDirNext.removeClass('hidden');
				}

				if (paginationPage.hasClass('active')) {
					paginationPage.removeClass('active');
				}

				$(this).addClass('active');

				if ($('.c-pagination__page-list__li.active').is(':first-child')) {
					paginationDirPrev.addClass('hidden');
					return false;
				} else if ($('.c-pagination__page-list__li.active').is(':last-child')) {
					paginationDirNext.addClass('hidden');
					return false;
				}
			}

		);

	}
	
});
