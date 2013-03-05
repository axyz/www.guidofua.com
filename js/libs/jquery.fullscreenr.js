/**
* Fullscreenr - lightweight full screen background jquery plugin
* By Jan Schneiders
* Version 1.0
* www.nanotux.com
*
* extended by Andrea Moretti (axyzxp@gmail.com)
* NEW OPTION full:
*	full : 0
*		preserve visibility of the entire image
*	full: 1
*		always show fullscreen image
*	full: 2
*		hibrid version that preserve vertical images and put fullscreen horizontals	
*
**/
(function($){	
	$.fn.fullscreenr = function(options) {
		var defaults = {bgID: 'bgimg', full: 1 };
		var options = $.extend({}, defaults, options); 
		$(document).ready(function() { $(options.bgID).fullscreenrResizer(options);	});
		$(window).bind("resize", function() { $(options.bgID).fullscreenrResizer(options); });		
		return this; 		
	};	
	$.fn.fullscreenrResizer = function(options) {
		if(options.full == 1){
			// Set bg size
			img = new Image();
			img.src = $('#bgimg').attr('src');
			
			var ratio = img.height / img.width;
			// Get browser window size
			var browserwidth = $(window).width();
			var browserheight = $(window).height();
			// Scale the image
			if ((browserheight/browserwidth) > ratio){
		    	$(this).height(browserheight);
		    	$(this).width(browserheight / ratio);
			} else {
		   		$(this).width(browserwidth);
		    	$(this).height(browserwidth * ratio);
			}
			// Center the image
			$(this).css('left', (browserwidth - $(this).width())/2);
			$(this).css('top', (browserheight - $(this).height())/2);
			return this;
		}else if(options.full == 0){
			// Set bg size
			img = new Image();
			img.src = $('#bgimg').attr('src');
			
			var ratio = img.height / img.width;
			// Get browser window size
			var browserwidth = $(window).width();
			var browserheight = $(window).height();
			// Scale the image
			if ((browserheight/browserwidth) > ratio){
		    	$(this).height(browserheight);
		    	$(this).width(browserheight / ratio);
			} else {
		   		$(this).width(browserheight / ratio);
		    	$(this).height(browserheight);
			}
			// Center the image
			$(this).css('left', (browserwidth - $(this).width())/2);
			$(this).css('top', (browserheight - $(this).height())/2);
			return this;
		}else{
			// Set bg size
			/* var ratio = $('#bgimg').height() / $('#bgimg').width();	*/
			
			img = new Image();
			img.src = $('#bgimg').attr('src');
			
			var ratio = img.height / img.width;
			// Get browser window size
			var browserwidth = $(window).width();
			var browserheight = $(window).height();
			// Scale the image
			if(ratio > 1){
				if ((browserheight/browserwidth) > ratio){
		    		$(this).height(browserheight);
		    		$(this).width(browserheight / ratio);
				} else {
		   			$(this).width(browserheight / ratio);
		    		$(this).height(browserheight);
				}
			}else{
				if ((browserheight/browserwidth) > ratio){
		    		$(this).height(browserheight);
		    		$(this).width(browserheight / ratio);
				} else {
		   		$(this).width(browserwidth);
		    		$(this).height((browserwidth * ratio) );
				}
			}
			// Center the image
			$(this).css('left', (browserwidth - $(this).width())/2);
			$(this).css('top', (browserheight - ($(this).height()))/2);
			return this;
		}
	};
})(jQuery);

function fullscreenr(){
//	alert('chiamata');
	setTimeout("jQuery.fn.fullscreenr(FullscreenrOptions);",100); 	//weird workaround to wait image loading
	$(FullscreenrOptions.bgID).fadeIn();		
}

function fullscreenrLoad(url){
	$(FullscreenrOptions.bgID).css('width', '0');  //hide not scaled image
		$(FullscreenrOptions.bgID).fadeOut(100);
	$(FullscreenrOptions.bgID).attr('src', url)
        fullscreenr();
}