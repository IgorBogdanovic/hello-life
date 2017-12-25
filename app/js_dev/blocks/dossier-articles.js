$(document).ready(function() {

	if($('.dossier-articles').length) {

		var tagList = $('.dossier-articles__tag-list'),
			articleList = $('.dossier-articles__article-list'),
			articleListFile = $('.dossier-articles__article-list__file'),
			tagFileNoMobile = $('.dossier-articles__article-list__file__tag__heading__no'),
			tagFileNoDesktop = $('.dossier-articles__tag-list__file__heading__no'),
			articleFileButton = $('.dossier-articles__article-list__file__button'),
			articleFileButtonSpan = $('.dossier-articles__article-list__file__button span'),
			
			$windowWidth = $(window).width(),
			$breakpoint = 750;

		if($windowWidth <= $breakpoint) {
			var articleListLength = articleList.children().length;

			for (var i = 0; i < articleListLength; i++) {
				var j = i + 1;
				tagFileNoMobile.eq(i).text('0'+j);
				// articleFileButtonSpan.eq(i).text('0'+j);
			}
		} else {
			var tagListLength = tagList.children().length;

			for (var i = 0; i < tagListLength; i++) {
				var j = i + 1;
				tagFileNoDesktop.eq(i).text('0'+j);
				// articleFileButtonSpan.eq(i).text('0'+j);
			}
		}

		var articleListLength = articleList.children().length;

		for (var i = 0; i < articleListLength; i++) {
			var j = i + 1;
			articleFileButtonSpan.eq(i).text('0'+j);

			var x = articleListFile.eq(i).find('.c-media--dossier').length;
			console.log(x);
		}

	}
	
});