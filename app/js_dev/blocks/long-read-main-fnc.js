$(document).ready(function() {

	if($('#long-read').length) {

		var longReadContent = $('#long-read-content'),
			longReadPanel = $('.long-read-panel'),

			$windowWidth = $(window).width(),
			$breakpoint = 750;

		if($windowWidth <= $breakpoint) {
			return false;
		} else {

			$('html').css({ 'height': '100%', 'margin': '0' });
			$('body').css({ 'height': '100%', 'margin': '0' });

			var controller = new ScrollMagic.Controller();

			var longReadContentLength = longReadContent.children().length;

			for (var i = 1, j = 0; i < longReadContentLength; i++) {
				var longReadPanelClass = 'lr-panel-' + j;
				j =+ i;
				longReadPanel.eq(i).addClass(longReadPanelClass);
			}

			var wipeAnimation = new TimelineMax()
			    .fromTo("section.lr-panel-0", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
			    .fromTo("section.lr-panel-1", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
			    .fromTo("section.lr-panel-2", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
			    .fromTo("section.lr-panel-3", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
			    .fromTo("section.lr-panel-4", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
			    .to("section.long-read-panel .lr-panel__content", 1, {y: "-100%", ease: Linear.easeNone});

			new ScrollMagic.Scene({
			        triggerElement: "#long-read-content",
			        triggerHook: "onLeave",
			        duration: "500%"
			    })
			    .setPin("#long-read-content")
			    .setTween(wipeAnimation)
			    .addIndicators()
			    .addTo(controller);

		}

	}
	
});