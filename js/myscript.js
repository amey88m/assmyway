jQuery(document).ready(function(){
	"use strict";
	
	
	if(jQuery(window).width() <=992){
		jQuery('.BB-box-img').wrap('<div class="ipad_img"></div>');
		jQuery('.footer-bottom p,ul.social').addClass('text-center');
	}
	if(jQuery(window).width() <=768){
		jQuery('.navbar-collapse').removeClass('pull-right');
		jQuery('.myway').addClass('mg-lr');
	};
	
	//_______________jQuery.nicescroll()
	$('html,body').niceScroll({
		cursorcolor:"#444",
		cursorwidth:"4",
		cursoropacitymin: 0,
		cursorborder: "1px solid #444",
		zIndex:"auto",
		scrollspeed: 50,
	});
	
});


jQuery(window).load('load',function(){
	// __________flexslider
	jQuery('.flexslider.top_slider').flexslider({
		animation:'fade',
		controlNav: false,
		directionNav: true,
		navigation: true,
		animationLoop: false,
		slideshow:false,
		prevText:"",
		nextText:""
	});
	jQuery('.flexslider').css('border',0);
	homeHeight();
});

function homeHeight(){
	var wh = jQuery(window).height()-80;
	jQuery('.top_slider,.top_slider .slides li').css('height', wh);
};
homeHeight();

jQuery(window).resize(function(){
	homeHeight();
});

jQuery(document).ready(function(){
	homeHeight();
});