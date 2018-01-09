$(window).on('load', function(){
	if($('.videos-page').length) {
		var videosSliderMain = $('.videos-slider'),
			videosSliderWrap = $('.videos-slider__wrap'),
			videosSlider = $('.videos-slider__slider'),
			videosSlide = $('.videos-slider__slide'),
			videosTrigger = $('.videos-slider__btn'),
			videosTriggerDesk = $('.videos-slider__btn--desk'),
			windowWidth = $(window).width(),
			breakpoint = 750;

			//Add inactive class to all slides with index gt 2
			$( ".videos-slider__slide:gt(2)").addClass('inactive');
			
			if(windowWidth <= breakpoint) {

				//Get first three inactive slides
				var inactiveSlides = $('.videos-slider__slide:visible').last().nextAll(':lt(3)');

				//On button click show next three slides
				videosTrigger.click(function(e){
					e.preventDefault();

					var activeSlide = inactiveSlides.eq(0).addClass('active');
					inactiveSlides.removeClass('inactive');

					//Add scroll functionality to videosSliderWrap
					jQuery.fn.scrollTo = function(elem, speed) { 
					    $(this).animate({
					        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top 
					    }, speed == undefined ? 600 : speed); 
					    return this; 
					};

					videosSliderWrap.scrollTo(activeSlide);

					//Get new first three inactive slides
					inactiveSlides = $('.videos-slider__slide:visible').last().nextAll(':lt(3)');

					//Remove button when all slides are visible
					var remainingInactive = $('.videos-slider__slide.inactive');
						
					if(remainingInactive.length == 0) {
						$(this).css({"display":"none"});
					}
				})

			}
			else {
				//Get first three inactive slides
				var inactiveSlides = $('.videos-slider__slide:visible').last().nextAll(':lt(3)');

				//On button click show next three slides
				videosTriggerDesk.click(function(e){
					e.preventDefault();
					var activeSlide = inactiveSlides.eq(0).addClass('active');
					inactiveSlides.removeClass('inactive');

					//remove active class from another articles
					var activeSibling = activeSlide.siblings();
					if(activeSibling.hasClass('active')) {
						activeSibling.removeClass('active');
					}

					//Add scroll functionality to videosSliderWrap
					jQuery.fn.scrollTo = function(elem, speed) { 
					    $(this).animate({
					        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top 
					    }, speed == undefined ? 600 : speed); 
					    return this; 
					};

					videosSliderWrap.scrollTo(activeSlide);

					//Get new first three inactive slides
					inactiveSlides = $('.videos-slider__slide:visible').last().nextAll(':lt(3)');

				 	//Remove button when all slides are visible
					var remainingInactive = $('.videos-slider__slide.inactive');
						
					if(remainingInactive.length == 0) {
						$(this).css({"visibility":"hidden"});
					}
				})

				//Detect scroll direction
				videosSliderWrap.on( 'DOMMouseScroll mousewheel', function ( event ) {
				    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { 
					    //Scroll down

					    //Get active slide at the moment
					   	var tempActive = $('.videos-slider__slide.active');

					   	//Make third slide from active-slide new-active-slide
				   		if(!(tempActive.nextAll().eq(2).hasClass('inactive'))
				   			 && tempActive.nextAll().eq(2).hasClass('videos-slider__slide')) {

				   			var newActiveSlide = tempActive.nextAll().eq(2).addClass('active');
				   			newActiveSlide.siblings().removeClass('active');

				   			//Scroll videosSliderWrap to new-active-slide
				   			jQuery.fn.scrollTo = function(elem, speed) { 
							    $(this).animate({
							        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top 
							    }, speed == undefined ? 600 : speed); 
							    return this; 
							};

							videosSliderWrap.scrollTo(newActiveSlide);
				   		}
				    } 
				    else {
					  	//Scroll up

				  		//Get active slide at the moment
				  	   	var tempActive = $('.videos-slider__slide.active');

				  	   	//Make third slide before active-slide new-active-slide
				  	   	if((tempActive.prevAll().eq(2).hasClass('videos-slider__slide'))) {
				  	   		newActiveSlide = tempActive.prevAll().eq(2).addClass('active');
				   			newActiveSlide.siblings().removeClass('active');

				   			//Scroll videosSliderWrap to new-active-slide
				   			jQuery.fn.scrollTo = function(elem, speed) { 
							    $(this).animate({
							        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top 
							    }, speed == undefined ? 600 : speed); 
							    return this; 
							};

							videosSliderWrap.scrollTo(newActiveSlide);
				  	   	}
					}
				});
			}	
	}
});
