(function($){
	"use strict";
	$( ".st-trailwrap" ).click(function() {
		$( "#top-header" ).slideToggle('fast',function(){
			var newheaderH = $('.st-header').height();
			$('main > section').css('padding-top',newheaderH);
			// console.log('new '+newheaderH);
		});
	});
	$('.st-bottom a').smoothScroll();
	var windowH = $(window).height();
	var headerH = $('.st-header').height();
	var footerH = $('.st-bottom-wrap').height();
	var mainH = windowH-(footerH);
	$('main > section').css('min-height',mainH);
	$('main > section').css('padding-top',headerH);
	// console.log('Window ' +windowH+ ' Header '+headerH+' Footer '+ footerH);
})(jQuery);