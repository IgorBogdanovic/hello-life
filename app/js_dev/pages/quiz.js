$(window).on('load', function(){

	if($('.quiz-page').length) {
		var quizSlider = $('.quiz__end-body-slider'),
			quizSliderWrap = $('.quiz__end-body-slider-wrap'),
			quizSliderArrowLeft = quizSliderWrap.find('.c-arrow--left'),
			quizSliderArrowRight = quizSliderWrap.find('.c-arrow--right'),
			quizIntro = $('.quiz__intro'),
			quizIntroBtn = $('.quiz__intro-body-btn'),
			quizQuestion = $('.quiz__question'),
			quizOption = $('.quiz__question-option'),
			quizQuestionBtn = $('.quiz__question-body-text-btn .c-btn'),
			quizQuestionCurrent = quizQuestion.find('.current'),
			quizQuestionTotal = quizQuestion.find('.total'),
			quizEnd = $('.quiz__end'),
			windowWidth = $(window).width(),
			breakpoint = 750;

		//Initialize slider
		quizSlider.slick({
			draggable: false,
			swipe: false,
			fade: true,
			dots: true,
			arrows: true,
			prevArrow: quizSliderArrowLeft,
			nextArrow: quizSliderArrowRight
		});

		//Remove class 'disabled' from button
		quizOption.click(function(){
			var quizOptionParent = $(this).parents('.quiz__question-body-text'),
				quizQuestionBtnTemp = quizOptionParent.find('.c-btn');
				quizQuestionBtnTemp.removeClass('disabled');
		})

		//Add total question number
		quizQuestionTotal.text(quizQuestion.length);

		if(windowWidth <= breakpoint) {

			//Quiz functionality for mobile

			//Start quiz
			quizIntroBtn.click(function(){
			 	quizIntro.fadeOut(500, function(){
			 		quizIntro.next().fadeIn(300).addClass('temp');

			 		//Add question number
			 		var quizQuestionTemp = $('.quiz__question.temp');
			 		quizQuestionCurrent.text(quizQuestionTemp.index());
			 	})
			})

			//Toogle between questions
			quizQuestionBtn.click(function(e){

				//Enable button functionality if radio button is checked
				var quizQuestionBtnParent = $(this).parents('.quiz__question-body-text'),
					quizOptionTemp = quizQuestionBtnParent.find('.quiz__question-option');

				if(quizOptionTemp.is(':checked')){
					e.preventDefault();
					var quizQuestionTemp = $('.quiz__question.temp');

					quizQuestionTemp.fadeOut(500, function(){
						if(quizQuestionTemp.next().hasClass('quiz__question')) {
							quizQuestionTemp.next().addClass('temp').fadeIn(300);
							$(this).removeClass('temp');

							//Add question number
							quizQuestionCurrent.text(quizQuestionTemp.index()+1);
						}
						else {
					 		quizEnd.fadeIn(300);

					 		//Reinitialize slick slider
					  		quizSlider.slick('setPosition');
						}
				 	})
				}
				else {
					return false;
				}
			})
		}
		else {
			//Quiz functionality for desktop

			//Start quiz
			quizIntroBtn.click(function(){
				quizIntro.addClass('hidden');
				setTimeout(function () {
			        quizIntro.addClass('inactive');
			        quizIntro.next().addClass('visible').addClass('active').addClass('temp');

			        //Add question number
			 		var quizQuestionTemp = $('.quiz__question.temp');
			 		quizQuestionCurrent.text(quizQuestionTemp.index());

			    }, 400);
			})

			//Toogle between questions
			quizQuestionBtn.click(function(e){

				//Enable button functionality if radio button is checked
				var quizQuestionBtnParent = $(this).parents('.quiz__question-body-text'),
					quizOptionTemp = quizQuestionBtnParent.find('.quiz__question-option');

				if(quizOptionTemp.is(':checked')) {
					e.preventDefault();
					var quizQuestionTemp = $('.quiz__question.temp');

					if(quizQuestionTemp.next().hasClass('quiz__question')) {
						quizQuestionTemp.removeClass('visible');
						setTimeout(function () {
							quizQuestionTemp.removeClass('active');
							quizQuestionTemp.next().addClass('visible').addClass('active').addClass('temp');

							//Remove class 'temp' from first article
							if(quizQuestionTemp.eq(0)) {
								quizQuestionTemp.removeClass('temp');
							}

							//Add question number
							quizQuestionCurrent.text(quizQuestionTemp.index()+1);

						}, 400);
					}

					//End quiz
					if(quizQuestionTemp.next().hasClass('quiz__end')) {
						quizQuestionTemp.removeClass('visible').addClass('inactive');

						setTimeout(function () {
							quizQuestionTemp.removeClass('active');

							quizEnd.addClass('visible').addClass('active');

							// Reinitialize slick slider
				       		quizSlider.slick('setPosition');
						}, 300);
					}
				}
				else {
					return false;
				}
			})
		}
	}
});

