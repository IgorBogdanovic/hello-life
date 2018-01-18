$(window).on('load', function() {

	if($('#long-read').length) {

		var longReadHeader = $('.b-header'),
			longReadContent = $('#long-read-content'),
			longReadAsideContent = $('.lr__fixed-aside-content'),
			longReadSlideLinks = $('.lr__slide-links'),
			longReadSocial = $('.c-social--lr'),
			longReadProgressBar = $('.lr__progress-bar'),
			longReadPanel = $('.long-read-panel'),
			longReadPanelSecWithQuote = $('.long-read__sec--quote'),
			longReadIntroHeading = $('.long-read__intro-heading'),
			longReadSecWrap = $('.long-read__sec-wrap'),
			longReadSecVideo = $('.long-read__video-sec'),
			longReadSecVideoMediaHolder = $('.long-read__video-sec__video'),
			longReadSecImg = $('.long-read__img-sec'),
			longReadSecImgMediaHolder = $('.long-read__img-sec__img'),
			longReadSecFullScr = $('.long-read__sec__full-scr'),

			$windowWidth = $(window).width(),
			$windowHeight = $(window).height(),
			$breakpoint = 750;

		if($windowWidth <= $breakpoint) {

			/*------------------------------------------
					> Long-read Youtube API  <			
			------------------------------------------*/
			var tag0 = document.createElement('script');
			tag0.src = "//www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag0, firstScriptTag);

			var $windowWidth = $(window).width(),
				$breakpoint = 750,
				playerVideo;

			onYouTubeIframeAPIReady = function () {
			    playerVideo = new YT.Player('long-read__video-frame', {
			        height: '100%',
			        width: '100%',
			        videoId: 'WolC3suWLOA',
			        playerVars: {
			            'autoplay': 0,
			            'rel': 0,
			            'showinfo': 0,
			            'controls': 1,
			            'fs': 0,
						'autohide': 1
			        },
			        events: {
			            'onStateChange': onPlayerStateChange
			        }
			    });
			}

			var longReadVideo = document.getElementById ("long-read__video-frame");
			$(longReadVideo).hide();

			var longReadThumb = document.getElementById ("long-read__video-thumb");
			longReadThumb.src = "https://img.youtube.com/vi/WolC3suWLOA/hqdefault.jpg";

			$(document).on('click', '#long-read__video-play', function () {
			    $(this).hide();
			    $("#long-read__video-frame").show();
			    $("#long-read__video-thumb").hide();
			    playerVideo.playVideo();
			});

			onPlayerStateChange = function (event) {
			    if (event.data == YT.PlayerState.ENDED) {
			        $('#long-read__video-play').fadeIn('normal');
			    }
			}
			/*------------------------------------------
			------------------------------------------*/

		} else {

			$('html').css({ 'height': '100%', 'margin': '0' });
			$('body').css({ 'height': '100%', 'margin': '0' });

			var controller1 = new ScrollMagic.Controller();

			var longReadContentLength = longReadContent.children().length,
				longReadProgressBarTotal = 1 / longReadContentLength,
				longReadLastSlideIndex = $('.lr-panel__content').parent().prev().index();

			// append needed li's - dots in DOM
			for (var i = 1; i < longReadContentLength; i++) {
				longReadSlideLinks.append('<li></li>');
				// var longReadSlideClass = 'lr-slide-' + j;
				// $('.lr__slide-links li').eq(j).addClass(longReadSlideClass);
				// longReadPanel.eq(j).addClass(longReadSlideClass);
				// j =+ i;
			}

			// section wipes functionality
			var wipeAnimation = new TimelineMax();

			longReadPanel.each(function(index, elem){
				var el = $(elem);

				if (index > 0 && index < longReadContentLength) {
					if (el.children().hasClass('lr-panel__content')) {
						wipeAnimation.fromTo(elem, 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});
						wipeAnimation.to("section.long-read-panel .lr-panel__content", 1, {y: "-100%", ease: Linear.easeNone});
					} else {
						wipeAnimation.fromTo(elem, 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});
					}
				}
			});

			// scene for section wipes
			var scene1 = new ScrollMagic.Scene({
			        triggerElement: "#long-read-content",
			        triggerHook: "onLeave",
			        duration: "600%"
			    })
			    .setPin("#long-read-content")
			    .setTween(wipeAnimation)
			    .on("progress", function (e) {
				    var longReadProgressBarUnit = e.progress / longReadProgressBarTotal,
				    	i = Math.floor(longReadProgressBarUnit),
				    	longReadSlideDotActive = $('.lr__slide-links li.active').index();

				    if ( longReadProgressBarUnit > 1 && longReadProgressBarUnit < (longReadLastSlideIndex + 1) ) {
				    	var j = longReadProgressBarUnit - i;
				    	var longReadProgressBarPrecent = j * 100;
				    	longReadProgressBar.css('width', longReadProgressBarPrecent + '%');
				    } else {
				    	longReadProgressBar.css('width', '0px');
				    }

				    if ( i == longReadLastSlideIndex ) {
				    	var k = 1 - (longReadProgressBarUnit - i);
				    	longReadAsideContent.css('opacity', k);
				    } else if ( i > longReadLastSlideIndex ) {
				    	longReadAsideContent.css('opacity', '0');
				    } else if ( i < longReadLastSlideIndex ) {
				    	longReadAsideContent.css('opacity', '1');
				    }

				    if ( i != longReadSlideDotActive ) {
				    	$('.lr__slide-links li.active').removeClass('active');
				    	$('.lr__slide-links li').eq(i).addClass('active');
				    }
				})
			    //.addIndicators()
			    .addTo(controller1);

			// scene for moving intro header
			var scene2 = new ScrollMagic.Scene({
			        triggerElement: ".long-read__intro-txt",
			        triggerHook: 0.53,
			        duration: "29%"
			    })
			    .setTween(TweenMax.to('.long-read__intro-heading', 1, { top: "24vh", ease:Linear.easeNone }))
			    .on("end", function (e) {
				    	longReadSocial.toggleClass('black');
				    })
			    //.addIndicators()
			    .addTo(controller1);

			// section quote functionality
			var longReadPanelSecWithQuoteLength = longReadPanelSecWithQuote.length;
			var scenesQuote = [];

			longReadPanelSecWithQuote.each(function(index, elem){
				var el = $(elem);
				var quote = el.find('.long-read__sec__quote');

				if (index < longReadPanelSecWithQuoteLength) {

					var sceneQ = new ScrollMagic.Scene({
				        triggerElement: elem,
				        triggerHook: 0.11,
				        duration: 0
				    })
				    .setTween(new TimelineMax().to(quote, 1, { left: 0 }))
				    //.addIndicators()
				    .addTo(controller1);

					scenesQuote.push(sceneQ);
				}

			});

			// section video functionality
			var longReadSecVideoLength = longReadSecVideo.length,
				longReadHeaderHeight = longReadHeader.outerHeight(),
				triggerHookForVideoAndImg = longReadHeaderHeight/$windowHeight,
				durationForVideoAndImg = longReadHeaderHeight - 1,
				scenesVideo = [];

			/*------------------------------------------
					> Long-read Youtube API  <			
			------------------------------------------*/
			var tag0 = document.createElement('script');
			tag0.src = "//www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag0, firstScriptTag);

			var $windowWidth = $(window).width(),
				$breakpoint = 750,
				playerVideo;

			onYouTubeIframeAPIReady = function () {
			    playerVideo = new YT.Player('long-read__video-frame', {
			        height: '100%',
			        width: '100%',
			        videoId: 'WolC3suWLOA',
			        playerVars: {
			            'autoplay': 0,
			            'rel': 0,
			            'showinfo': 0,
			            'controls': 1,
			            'fs': 0,
						'autohide': 1
			        },
			        events: {
			            'onStateChange': onPlayerStateChange
			        }
			    });
			}

			$(document).on('click', '#long-read__video-play', function () {
			    $(this).hide();
			    playerVideo.playVideo();
			});

			onPlayerStateChange = function (event) {
				if (event.data == YT.PlayerState.ENDED) {
			        $('#long-read__video-play').fadeIn('normal');
			    }
			}
			/*------------------------------------------
			------------------------------------------*/

			longReadSecVideo.each(function(index, elem){
				var el = $(elem);

				if (index < longReadSecVideoLength) {

					var sceneV = new ScrollMagic.Scene({
				        triggerElement: elem,
				        triggerHook: triggerHookForVideoAndImg,
				        duration: durationForVideoAndImg
				    })
				    .on("start", function (e) {
				    	if (e.scrollDirection == 'FORWARD') {
				    		if (longReadSecVideo.hasClass('slide-in')) {
				    			playerVideo.playVideo();
				    		}
				    	} else if (e.scrollDirection == 'REVERSE') {
				    		playerVideo.pauseVideo();
				    		el.find('.long-read__video-sec__video__play').show();
				    		if (longReadSecVideo.hasClass('slide-in')) {
				    			longReadSecVideo.removeClass('slide-in');
				    			longReadSecVideoMediaHolder.css({'left': mediaHolderCssLeft});
				    			longReadHeader.animate({top: 0}, 500);
				    		}
				    	}
				    })
				    .on("end", function (e) {
				    	if ( el.find('.long-read__video-sec__video').css('left') == '0px' ) {
						    playerVideo.pauseVideo();
						    el.find('.long-read__video-sec__video__play').show();
						}

			    		if (longReadSecVideo.hasClass('slide-in')) {
			    			longReadSecVideo.removeClass('slide-in');
			    			longReadSecVideoMediaHolder.css({'left': mediaHolderCssLeft});
			    			longReadHeader.animate({top: 0}, 500);
			    		}

			    		$(window).scroll(function() {
							if (longReadSecVideo.hasClass('slide-in')) {
				    			longReadSecVideo.removeClass('slide-in');
				    			longReadSecVideoMediaHolder.css({'left': mediaHolderCssLeft});
				    			longReadHeader.animate({top: 0}, 500);
				    		}
						});
				    })
				    .on("progress", function (e) {
				    	var longReadHeaderTopValue = -(e.progress * 100 * longReadHeaderHeight / 100);

				    	if ( longReadSecVideo.hasClass('slide-in') ) {
				    		longReadHeader.css({'top': longReadHeaderTopValue});
				    	}
					    
					})
				    //.addIndicators()
				    .addTo(controller1);

					scenesVideo.push(sceneV);
				}

			});

			// section image functionality
			var longReadSecImgLength = longReadSecImg.length;
			var scenesImage = [];

			longReadSecImg.each(function(index, elem){
				var el = $(elem);

				if (index < longReadSecImgLength) {
					var sceneI = new ScrollMagic.Scene({
				        triggerElement: elem,
				        triggerHook: triggerHookForVideoAndImg,
				        duration: durationForVideoAndImg
				    })
				    .on("start", function (e) {
				    	playerVideo.pauseVideo();
				    	el.find('.long-read__video-sec__video__play').show();
				    })
				    .on("end", function (e) {
				    	if (longReadSecImg.hasClass('slide-in')) {
			    			longReadSecImg.removeClass('slide-in');
			    			longReadSecImgMediaHolder.css({'left': mediaHolderCssLeft});
			    			longReadHeader.animate({top: 0}, 500);
			    		}
			    		$(window).scroll(function() {
							if (longReadSecImg.hasClass('slide-in')) {
				    			longReadSecImg.removeClass('slide-in');
				    			longReadSecImgMediaHolder.css({'left': mediaHolderCssLeft});
				    			longReadHeader.animate({top: 0}, 500);
				    		}
						});
				    })
				    .on("progress", function (e) {
				    	var longReadHeaderTopValue = -(e.progress * 100 * longReadHeaderHeight / 100);

				    	if ( longReadSecImg.hasClass('slide-in') ) {
				    		longReadHeader.css({'top': longReadHeaderTopValue});
				    	}
					    
					})
				    //.addIndicators()
				    .addTo(controller1);

					scenesImage.push(sceneI);
				}

			});

			var longReadSlideDot = $('.lr__slide-links li'),
				mediaHolderCssLeft = longReadSecWrap.offset().left + longReadSecWrap.width() * 0.6,
				targetSection = controller1.scrollPos() / $windowHeight;

		 	$('.lr__slide-links li').eq(targetSection).addClass('active');

			longReadSlideDot.click(
				function() {
					targetSection = $(this).index();
			 		var targetPos = targetSection * $windowHeight;

				 	controller1.scrollTo(function (newScrollPos) {
					    $('html, body').animate({scrollTop: newScrollPos}, 1000);
					});
					controller1.scrollTo(targetPos+1);
				}
			);

			longReadSecFullScr.click(
				function() {

					var longReadPanelIndex = $(this).parents('.long-read-panel').index(),
						targetPos = longReadPanelIndex * $windowHeight,
						thisParent = $(this).parent(),
						thisLongReadSec = $(this).parents('.long-read__sec');

					if ( !thisLongReadSec.hasClass('slide-in') ) {

						controller1.scrollTo(function (newScrollPos) {
						    $('html, body').animate({scrollTop: newScrollPos}, 500);
						});
						controller1.scrollTo(targetPos);

						setTimeout (function () {
					        thisParent.css({'left': '0px'});
					        thisLongReadSec.addClass('slide-in');
					        longReadHeader.animate({top: -longReadHeaderHeight}, 500);
					    }, 600);

					} else {

					    thisParent.css({'left': mediaHolderCssLeft});
					    thisLongReadSec.removeClass('slide-in');
					    longReadHeader.animate({top: 0}, 500);

					}

				}
			);

		}

	}
	
});
