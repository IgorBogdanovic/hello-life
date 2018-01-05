$(document).ready(function() {

/*------------------------------------------
		> Long-read Youtube API  <						
------------------------------------------*/
	
	if($('.long-read__video-sec__video').length) {

		var tag0 = document.createElement('script');
		tag0.src = "//www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag0, firstScriptTag);

		var playerVideo;

		onYouTubeIframeAPIReady = function () {
		    playerVideo = new YT.Player('long-read__video-frame', {
		        height: '100%',
		        width: '100%',
		        videoId: 'WolC3suWLOA',
		        playerVars: {
		            'autoplay': 0,
		            'rel': 0,
		            'showinfo': 0,
		            'controls': 0,
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

		onPlayerStateChange = function (event) {
		    if (event.data == YT.PlayerState.ENDED) {
		        $('#long-read__video-play').fadeIn('normal');
		    }
		}

		$(document).on('click', '#long-read__video-play', function () {
		    $(this).hide();
		    $("#long-read__video-frame").show();
		    $("#long-read__video-thumb").hide();
		    playerVideo.playVideo();
		});
	    
	}

////////////////////////////////////////////////

});