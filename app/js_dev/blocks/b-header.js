$(window).on('load', function(){
	var $header = $('.b-header'),
		$headerMobile = $('.b-header__mobile'),
		$headerSlider = $('.b-header__drop-down-slider'),
		$bHeaderNav = $('.b-header__navigation'),
		$headerListItemWithDrop = $('.b-header__navigation-item.with-drop-down'),
		$headerListItem = $('.b-header__navigation-item'),
		$headerListItemNoDrop = $('.b-header__navigation-item.no-drop-down'),
		$headerWrapper = $('.b-header__wrapper'),
		$headerTrigger = $('.b-header__mobile-trigger'),
		$headerClose = $('.b-header__mobile-close'),
		$headerDropDown = $('.b-header__drop-down'),
		$headerHello = $('.b-header__hello'),
		$headerSearchIcon = $('.b-header__navigation-search'),
		$headerSearchField = $('.b-header__search-desk'),
		$headerLogo = $('.b-header__logo'),
		$headerLogoBrand = $('.b-header__logo-brand'),
		$windowWidth = $(window).width(),
		$breakpoint = 750;


	if($windowWidth <= $breakpoint) {

		//Initialize slider on mobile
		$headerSlider.slick({
		  slidesToShow: 1,
		  variableWidth: true,
		  arrows: false
		});

		//Show different dropdowns
		$headerListItemWithDrop.click(function(e){
			e.preventDefault();
			e.stopPropagation();
			$(this).siblings().removeClass('active');
			$(this).toggleClass('active');
		})

		//Open menu on mobile
		$headerTrigger.click(function(){
			$(this).addClass('inactive');
			$headerClose.addClass('active');
			$headerWrapper.addClass('active');
			$header.addClass('active');
			$headerMobile.addClass('active');
			$headerLogo.addClass('active');
			$('body').css({"overflow-y": "hidden"});
		});

		//Close menu on mobile
		$headerClose.click(function(){
			$(this).removeClass('active');
			$headerTrigger.removeClass('inactive');
			$headerWrapper.removeClass('active');
			$header.removeClass('active');
			$headerMobile.removeClass('active');
			$headerLogo.removeClass('active');
			$('body').css({"overflow-y": "visible"});
		});
	}
	else {

		//Show dropdown on hover
		$headerListItemWithDrop.mouseover(function(){
			$header.addClass('activeDesk');
			$headerDropDown.removeClass('activeDesk');
			$(this).find('.b-header__drop-down').addClass('activeDesk');
			$headerHello.addClass('activeDesk');
			$headerSearchIcon.addClass('activeDesk');
			$headerLogo.addClass('activeDesk');
			$headerListItem.addClass('activeDesk');
			//$(this).siblings().addClass('activeDesk');
			$headerLogoBrand.addClass('activeDesk');
			$(this).removeClass('activeDesk');
			//$headerDropDown.addClass('activeDesk');
			$headerSearchField.removeClass('active');

			$(this).mouseout(function(){
				//$(this).addClass('activeDesk');
				//console.log($(this));
			})
		})

		//Close dropdown
		$headerListItemNoDrop.hover(function(){
			$header.removeClass('activeDesk');
			$headerDropDown.removeClass('activeDesk');
			$headerHello.removeClass('activeDesk');
			$headerSearchIcon.removeClass('activeDesk');
			$headerLogo.removeClass('activeDesk');
			$headerListItem.removeClass('activeDesk');
			$headerLogoBrand.removeClass('activeDesk');
			$headerSearchField.removeClass('active');
		})

		//Close dropdown 
		$header.mouseleave(function(){
			$(this).removeClass('activeDesk');
			$headerDropDown.removeClass('activeDesk');
			$headerHello.removeClass('activeDesk');
			$headerSearchIcon.removeClass('activeDesk');
			$headerLogo.removeClass('activeDesk');
			$headerListItem.removeClass('activeDesk');
			$headerLogoBrand.removeClass('activeDesk');
		})

		//Open search field
		$headerSearchIcon.click(function(e){
			e.preventDefault();
			$headerSearchField.toggleClass('active');

			$header.removeClass('activeDesk');
			$headerDropDown.removeClass('activeDesk');
			$headerHello.removeClass('activeDesk');
			$headerSearchIcon.removeClass('activeDesk');
			$headerLogo.removeClass('activeDesk');
			$headerListItem.removeClass('activeDesk');
			$headerLogoBrand.removeClass('activeDesk');
		})

		if($('#long-read').length) {
			return false;
		} else {
			//Add and remove sticky class on scroll
			var $lastScrollTop = 0;
			$(window).scroll(function(e){ 
				var $st = $(this).scrollTop();
				if($st > $lastScrollTop) {
					$header.addClass('stickyDesk');
				} 
				else {
					$header.removeClass('stickyDesk');
				}
				return false;
			})
		}
	}
});
