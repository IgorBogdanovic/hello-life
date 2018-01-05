$(document).ready(function() {

	if($('.long-read__video-sec__pop-up').length) {

		var videoSecContent = $('.long-read__video-sec .main-wrapper'),
			videoSecSpanLink = $('.long-read__video-sec__span-link'),
			videoSecPopUp = $('.long-read__video-sec__pop-up'),
			videoSecPopUpClose = $('.long-read__video-sec__pop-up__close'),

			$windowWidth = $(window).width(),
			$breakpoint = 750;

		videoSecSpanLink.click(
			function() {
				var videoSecContentBottom = videoSecContent.offset().top + videoSecContent.outerHeight(),
					videoSecSpanLinkTop = videoSecSpanLink.offset().top,
					videoSecPopUpBottomPos = (videoSecContentBottom - videoSecSpanLinkTop) * 1.055;

				if($windowWidth <= $breakpoint) {
					videoSecPopUp.css({ 'bottom': videoSecPopUpBottomPos });
				}

				videoSecPopUp.show('drop', 500);
			}
		);

		videoSecPopUpClose.click(
			function() {
				videoSecPopUp.hide('drop', 500);
			}
		);

	}
	
});
