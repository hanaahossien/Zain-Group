new WOW().init();
jQuery(document).ready(function($){
	var tabs = $('.cd-tabs');
	
	tabs.each(function(){
		var tab = $(this),
			tabItems = tab.find('ul.cd-tabs-navigation'),
			tabContentWrapper = tab.find('ul.cd-tabs-content'),
			tabNavigation = tab.find('nav');

		tabItems.on('click', 'a', function(event){
			event.preventDefault();
			var selectedItem = $(this);
			if( !selectedItem.hasClass('selected') ) {
				var selectedTab = selectedItem.data('content'),
					selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
					slectedContentHeight = selectedContent.innerHeight();
				
				tabItems.find('a.selected').removeClass('selected');
				selectedItem.addClass('selected');
				selectedContent.addClass('selected').siblings('li').removeClass('selected');
				//animate tabContentWrapper height when content changes 
				tabContentWrapper.animate({
					'height': slectedContentHeight
				}, 200);
			}
		});

		//hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
		checkScrolling(tabNavigation);
		tabNavigation.on('scroll', function(){ 
			checkScrolling($(this));
		});
	});
	
	$(window).on('resize', function(){
		tabs.each(function(){
			var tab = $(this);
			checkScrolling(tab.find('nav'));
			tab.find('.cd-tabs-content').css('height', 'auto');
		});
	});

	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children('.cd-tabs-navigation').width()),
		 	tabsViewport = parseInt(tabs.width());
		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
			tabs.parent('.cd-tabs').addClass('is-ended');
		} else {
			tabs.parent('.cd-tabs').removeClass('is-ended');
		}
	}
});


$('.owl-carousel').owlCarousel({
	margin: 0,
	autoplay: true,
	// autoplayTimeout: 4000,
	// slideTransition: 'linear',
	// autoplaySpeed: 4000,
	// autoplayHoverPause: true,
	// responsiveClass: true,
	dots: false,
	responsive: {
		0: {
			
			items: 1,
		},
		400: {
			items: 2,
		},
		768: {

			items: 3,
			center: true,

		},
		992: {
			items: 4,
			loop: true
		}
	}
});

// $('.owl-carousel').owlCarousel({
// 	// stagePadding: 50,
// 	loop: true,
// 	margin: 100,
// 	autoplay: true,
// 	autoplayTimeout: 3000,
// 	slideTransition: 'linear',
// 	autoplaySpeed: 3000,
// 	autoplayHoverPause: true,
// 	responsiveClass: true,
// 	dots: false,
// 	nav: false,
// 	responsive: {
// 		0: {
// 			items: 2,
// 			nav: false
// 		},
// 		479: {
// 			items: 3
// 		},
// 		768: {
// 			items: 3
// 		},
// 		992: {
// 			items: 5
// 		},
// 		1500: {
// 			items: 5
// 		},
// 		1900: {
// 			items: 5,
// 		}
// 	}
// })