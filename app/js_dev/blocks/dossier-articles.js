$(document).ready(function() {

	if($('.dossier-articles').length) {

		var tagList = $('.dossier-articles__tag-list'),
			tagListTrack = $('.dossier-articles__tag-list-track'),
			tagListFile = $('.dossier-articles__tag-list__file'),
			articleList = $('.dossier-articles__article-list'),
			articleListFile = $('.dossier-articles__article-list__file'),
			tagFileNoMobile = $('.dossier-articles__article-list__file__tag__heading__no'),
			tagFileNoDesktop = $('.dossier-articles__tag-list__file__heading__no'),
			articleFileButton = $('.dossier-articles__article-list__file__button'),
			articleFileButtonSpan = $('.dossier-articles__article-list__file__button span'),
			
			$windowWidth = $(window).width(),
			$breakpoint = 750;

		// detect how many article lists is there and put that number in adequate spans
		if($windowWidth <= $breakpoint) {
			var articleListLength = articleList.children().length;

			for (var i = 0; i < articleListLength; i++) {
				var j = i + 1;
				tagFileNoMobile.eq(i).text('0'+j);
			}
		} else {
			var tagListLength = tagListTrack.children().length;

			for (var i = 0; i < tagListLength; i++) {
				var j = i + 1;
				tagFileNoDesktop.eq(i).text('0'+j);
			}

			// creating relation between tagList and articleList
			articleListFile.first().addClass('active');
			var activeFileIndex = $('.dossier-articles__article-list__file.active').index();
			tagListFile.eq(activeFileIndex).addClass('active slide-current');
		}

		// detect how many article lists is there, put that number inside button span and
		// check how many media's is in article list file and hide button if it's not more then 6
		var articleListLength = articleList.children().length,
			articleFileMediaLength;

		for (var i = 0; i < articleListLength; i++) {
			// console.log(articleListLength);
			var j = i + 1;
			articleFileButtonSpan.eq(i).text('0'+j);

			articleFileMediaLength = articleListFile.eq(i).find('.c-media--dossier-wrapper--on-click').length;
			
			if (articleFileMediaLength <= 0) {
				articleFileButton.eq(i).addClass('hidden');
			}
		}

		articleFileButton.click(

			function() {
				$(this).parent().find('.c-media--dossier-wrapper--on-click').slideDown(500);
				$(this).addClass('hidden');
			}

		);
		
		// defining variable that will prevent trigger to activate events in articleList once tagListFile is clicked
		var TAG_CLICKED = false,
			tag_inactive_height,
			last_tag_file_index = tagListFile.last().index(),
			slide_it = 0;

		// defining variable that calculates height of inactive tagListFile -> needed for tagList slider functionality
		// setTimeout because of browsers do not calculate the same outerHeight(true) on wondow load
		setTimeout ( function () {
	        tag_inactive_height = $('.dossier-articles__tag-list__file.active').next().outerHeight(true);
	    }, 100);

		tagListFile.click(

			function() {

				TAG_CLICKED = true;
				var activeTagIndex = $(this).index(),
					activePrevTagIndex = $(this).prev().index(),
					activeNextTagIndex = $(this).next().index(),
					slide_current = $('.dossier-articles__tag-list__file.slide-current').index();

				// class active functionality for tagList
				if ($(this).hasClass('active')) {
					return false;
				}

				$('.dossier-articles__tag-list__file.active').removeClass('active');

				$(this).addClass('active');

				if (0 < activeTagIndex-1 && activeTagIndex > slide_current && activeTagIndex < last_tag_file_index) {
					$('.dossier-articles__tag-list__file.slide-current').removeClass('slide-current');
					$(this).addClass('slide-current');

					slide_it -= tag_inactive_height;
					tagListTrack.animate({ top: slide_it }, 600 );
				} else if (0 < activeTagIndex && activeTagIndex < slide_current && activeTagIndex < last_tag_file_index) {
					$('.dossier-articles__tag-list__file.slide-current').removeClass('slide-current');
					$(this).addClass('slide-current');

					slide_it += tag_inactive_height;
					tagListTrack.animate({ top: slide_it }, 600 );
				}

				// class active functionality for articleList
				if (articleListFile.eq(activeTagIndex).hasClass('active')) {
					return false;
				}

				$('.dossier-articles__article-list__file.active').removeClass('active');

				articleListFile.eq(activeTagIndex).addClass('active');

				// enable scroll inside of articleList (because of overflow: scroll)
			 	jQuery.fn.scrollTo = function(elem, speed) { 
				    $(this).animate({
				        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top 
				    }, speed == undefined ? 600 : speed, function() { TAG_CLICKED = false; });
				    return this; 
				};

				articleList.scrollTo('.dossier-articles__article-list__file.active');

			}

		);

		// disable overal scroll when mouse is over articleList --> SHOULD BE REMOVED as client originaly requsted
		// articleList.bind('mousewheel DOMMouseScroll', function(e) {
		//     var scrollTo = null;

		//     if (e.type == 'mousewheel') {
		//         scrollTo = (e.originalEvent.wheelDelta * -1);
		//     }
		//     else if (e.type == 'DOMMouseScroll') {
		//         scrollTo = 40 * e.originalEvent.detail;
		//     }

		//     if (scrollTo) {
		//         e.preventDefault();
		//         $(this).scrollTop(scrollTo + $(this).scrollTop());
		//     }
		// });

		// assigning controller to specific div
		var controller = new ScrollMagic.Controller({container: '.dossier-articles__article-list'});

		articleFileButton.each(function(index, elem){
			var el = $(elem);

		    var scene = new ScrollMagic.Scene({triggerElement: elem})
						.addTo(controller)
						// .addIndicators()
						.triggerHook(0.2)
						.on("start end", function (e) {
							if (TAG_CLICKED) {
								return false;
							} else {
								// class active functionality for articleList
								el.parent().toggleClass('active');
								el.parent().next().toggleClass('active');
								
								// class active functionality for tagList
								var slide_current = $('.dossier-articles__tag-list__file.slide-current').index();
								activeFileIndex = $('.dossier-articles__article-list__file.active').index();
								$('.dossier-articles__tag-list__file.active').removeClass('active');
								tagListFile.eq(activeFileIndex).toggleClass('active');

								if (0 < activeFileIndex-1 && activeFileIndex > slide_current && activeFileIndex < last_tag_file_index) {
									$('.dossier-articles__tag-list__file.slide-current').removeClass('slide-current');
									tagListFile.eq(activeFileIndex).addClass('slide-current');

									slide_it -= tag_inactive_height;
									tagListTrack.animate({ top: slide_it }, 600 );
								} else if (0 < activeFileIndex && activeFileIndex < slide_current && activeFileIndex < last_tag_file_index) {
									$('.dossier-articles__tag-list__file.slide-current').removeClass('slide-current');
									tagListFile.eq(activeFileIndex).addClass('slide-current');

									slide_it += tag_inactive_height;
									tagListTrack.animate({ top: slide_it }, 600 );
								}
							}
						});
		});

	}
	
});