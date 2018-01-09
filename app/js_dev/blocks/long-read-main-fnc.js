$(document).ready(function() {

	if($('#long-read').length) {

		var longReadContent = $('#long-read-content'),
			longReadPanel = $('.long-read-panel'),
			longReadPanelSecWithQuote = $('.long-read__sec--quote'),
			longReadIntroHeading = $('.long-read__intro-heading'),

			$windowWidth = $(window).width(),
			$breakpoint = 750;

		if($windowWidth <= $breakpoint) {
			return false;
		} else {

			$('html').css({ 'height': '100%', 'margin': '0' });
			$('body').css({ 'height': '100%', 'margin': '0' });

			var controller1 = new ScrollMagic.Controller();
			var controller2 = new ScrollMagic.Controller({container: '.long-read__intro'});
			//var controller3 = new ScrollMagic.Controller({container: '.long-read__sec--quote'});

			var longReadContentLength = longReadContent.children().length;

			// setting lr-panel-'No' classes to elements in html
			// for (var i = 1, j = 0; i < longReadContentLength; i++) {
			// 	var longReadPanelClass = 'lr-panel-' + j;
			// 	j =+ i;
			// 	longReadPanel.eq(i).addClass(longReadPanelClass);
			// }

			// section wipes functionality
			var wipeAnimation = new TimelineMax();

			longReadPanel.each(function(index, elem){
				var el = $(elem);

				if (index > 0 && index < longReadContentLength) {
					wipeAnimation.fromTo(elem, 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});

					if (el.children().hasClass('lr-panel__content')) {
						wipeAnimation.to("section.long-read-panel .lr-panel__content", 1, {y: "-100%", ease: Linear.easeNone});
					}
				}
			});

			// scene for section wipes
			var scene1 = new ScrollMagic.Scene({
			        triggerElement: "#long-read-content",
			        triggerHook: "onLeave",
			        duration: "750%"
			    })
			    .setPin("#long-read-content")
			    .setTween(wipeAnimation)
			    //.addIndicators()
			    .addTo(controller1);

			// scene for moving intro header
			var scene2 = new ScrollMagic.Scene({
			        triggerElement: ".long-read__intro-txt",
			        triggerHook: 0.53,
			        duration: "53%"
			    })
			    .setTween(TweenMax.to('.long-read__intro-heading', 1, { top: "24vh" }))
			    //.addIndicators()
			    .addTo(controller2);

			// scene for removing z-index on intro header so it doesn't have priority on other slides
			var scene3 = new ScrollMagic.Scene({
			        triggerElement: ".long-read__video-sec",
			        triggerHook: 0.18
			    })
				.on("start end", function () {
					longReadIntroHeading.toggleClass('z-index');
				})
			    //.addIndicators()
			    .addTo(controller2);

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

		}

	}
	
});
