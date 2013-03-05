/* Author: Andrea Moretti (axyzxp@gmail.com)

*/

var nav = $("#nav li");

var pages = {	"#portfolio": "#",
				"#about": "page/about.html",
				"#about_it": "page/about_it.html",
				"#contact": "page/contact.html",
				"#video": "page/video.html",
			};
			
/* Title Overriding */
var info = {	
		   };
		
		function URLSet($str){
			window.location.hash = $str;
		}
		
		/* main menu */
	    nav.click(function(){
	    	URLSet(this.id);
	    });
	    /* end main menu */
				
window.onload = function(){
	if(window.location.hash === "" || window.location.hash === "#portfolio"){
		$("#portfolio").addClass("selected")
//		$("#info").show();
		$('#thumbs').css('opacity', '1');
//		$('#thumbs').animate({bottom: '0px'}, {queue: false});
//		$('#sharebox').animate({bottom: '+107px'}, {queue: false});
	}else if(window.location.hash === "#blog"){
			$("#pagebox").hide();
	}else if(window.location.hash === "#share"){
			$("#pagebox").hide();
	}else{
		$("#info").hide();
		$("#pagebox").show();
		$('#pagebox').load(pages[window.location.hash]);
	}
	$('#menu li').each(function(i){
		hash = "#" + $(this).attr("id");
		if(hash === window.location.hash){
			$(this).addClass("selected");
		}else{$(this).removeClass("selected")};
	});
};

window.onhashchange = function(){
		if(window.location.hash === "#portfolio"){
			stop();
			$("#pagebox").hide();
			$("#info").show();
			$('#thumbs').css('opacity', '1');
			$('#thumbs').animate({bottom: '0px'}, {queue: false});
		}else if(window.location.hash === "#blog"){
			$("#pagebox").hide();
		}else if(window.location.hash === "#share"){
			$("#pagebox").hide();
		}else{
			$("#pagebox").show();
			$("#info").hide();
			$('#pagebox').load(pages[window.location.hash]);
		}
		$('#menu li').each(function(i){
			hash = "#" + $(this).attr("id");
			if(hash === window.location.hash){
				$(this).addClass("selected");
			}else{$(this).removeClass("selected")};
		});
};

/*var hammer = new Hammer(document.getElementById("realBody"));
hammer.onswipe = function(ev) { 
	if(ev.direction == "left"){
		$('#thumb').nextSlide();
	}else $('#thumb').prevSlide();
};*/

var startImages = [1] //array di possibili immagini d'apertura
var randomStart = startImages[Math.floor((Math.random() * startImages.length-1)+1)];


function stop(){
	$('#thumbs').stopSlideShow();
}

function start(){
	$('#thumbs').startSlideShow();
}

$(function(){
	// default options
jQuery.fn.superbgimage.defaults = {
	id: 'superbgimage', // id for the containter
	z_index: 0, // z-index for the container
	inlineMode: 0, // 0-resize to browser size, 1-do not resize to browser-size
	showimage: randomStart, // number of first image to display
	nocrop: 0, // do not crop the image (background may be visible on the vertical borders
	hibridcrop: 1, // crop horizontal images, but not verticals
	vertical_center: 1, // 0-align top, 1-center vertical
	transition: 1, // 0-none, 1-fade, 2-slide down, 3-slide left, 4-slide top, 5-slide right, 6-blind horizontal, 7-blind vertical, 90-slide right/left, 91-slide top/down
	transitionout: 1, // 0-no transition for previous image, 1-transition for previous image
	randomtransition: 0, // 0-none, 1-use random transition (0-7)
	showtitle: 0, // 0-none, 1-show title
	slideshow: 1, // 0-none, 1-autostart slideshow
	slide_interval: 5000, // interval for the slideshow
	randomimage: 0, // 0-none, 1-random image
	speed: 'slow', // animation speed
	preload: 1, // 0-none, 1-preload images
	onShow: onImageShow, // function-callback show image
	onClick: stop,
	onHide: null, // function-callback hide image
	onMouseenter: null, // function-callback mouseenter
	onMouseleave: null, // function-callback mouseleave
	onMousemove: null // function-callback mousemove
};

	
	// initialize SuperBGImage
	$('#thumb').superbgimage();
	
	//$('body').fadeIn(2000);

	
	$('#video_thumbs a').prettyPhoto();
	
	function onImageShow(img){
		if(info[img]){ 
			$('#infotext').html(info[img]);
		}else{
			$('#infotext').html("<h1 style='font-size:15px;'>" + $('#thumb .activeslide').attr("alt") + "</h1>");
		} 

		var link = 'http://www.guidofua.com/' + encodeURI($('#thumb .activeslide').attr("href"));
 
		$('#sharebox').html('&nbsp;&nbsp;');
		$('#sharebox').append('<a target="_blank" href="http://www.facebook.com/sharer.php?u=http://www.guidofua.com/php/static.php?img=' + link + '" class="social-icon"><i style="font-size: 22px;" class="icon-facebook icon-large"></i></a>');
		$('#sharebox').append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
		$('#sharebox').append('<a target="_blank" href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.guidofua.com&media=' + link + '" class="social-icon"><i style="font-size: 22px;" class="icon-pinterest icon-large"></i></a>');
		$('#sharebox').append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
		$('#sharebox').append('<a target="_blank" href="https://twitter.com/share" class="social-icon twitter-share-button" data-related="guidofua" data-hashtags="photography"><i style="font-size: 22px;" class="icon-twitter icon-large"></i></a>');
		//$('#sharebox').append('&nbsp;&nbsp;&nbsp;&nbsp;');
		//$('#sharebox').append('<a target="_blank" href="https://plusone.google.com/_/+1/confirm?hl=en&url=http://www.guidofua.com/" class="social-icon"><i style="font-size: 22px;" class="icon-google-plus icon-large"></i></a>');
		$('#sharebox').append('&nbsp;&nbsp;');
		//$('#info').animate({right: '0px'}).delay(2000).animate({right: '-230px'});;

		/*$("div#scrollable").smoothDivScroll("jumpToElement", "number", img);    TOFIX */ 
	}
	
	$("#realBody").mousemove(function(e){
		if(e.pageY > 60 && e.pageY < ($(window).height() - 60)){
			if(e.pageX < ($(window).width() * 0.33)){
				$(this).css('cursor', 'pointer');
			}else if(e.pageX > ($(window).width() * 0.66)){
				$(this).css('cursor', 'pointer');
			}else {$(this).css('cursor', 'default');}
		}else {$(this).css('cursor', 'default');}
	});
	
	$("#realBody").click(function(e){
		if(e.pageY > 60 && e.pageY < ($(window).height() - 60)){
			$('#thumbs').css('opacity', '6');
			$('#thumbs').animate({bottom: '-107px'}, {queue: false});
			$('#sharebox').animate({bottom: '0px'}, {queue: false});
			if(e.pageX < ($(window).width() * 0.33)){
				stop();
				$('#thumb').prevSlide();
			}else if(e.pageX > ($(window).width() * 0.66)){
				stop();
				$('#thumb').nextSlide();
			}
		}
	});
	
	$("#thumb a").click(function(e){
		stop();
		window.location.hash = "portfolio";
	});
		
	
	$(document).keydown(function(e){
	    if (e.keyCode == 37) { 
	    	stop();
	      $('#thumb').prevSlide();
	    }else if (e.keyCode == 39) { 
	    	stop();
	      $('#thumb').nextSlide();
	    }
	});
	
	
	$("#realBody").mousemove(function(e){
		if(e.pageY < 114 && e.pageX < ($(window).width() * 0.9)){
			$('#nav').css('visibility', 'visible');
			$('#logo2').css('visibility', 'visible');
		}else{
			$('#nav').css('visibility', 'hidden');
			$('#logo2').css('visibility', 'hidden');
		}
	});
	
	
	$(window).load(function(){
		$("div#scrollable").smoothDivScroll({mousewheelScrolling: "allDirections",
																				 manualContinuousScrolling: true,
																				 touchScrolling: true
        																 });
	});
	
	$('#thumbs').hover(
		function(){
			$('#thumbs').css('opacity', '1');
			$('#thumbs').animate({bottom: '0px'}, {queue: false});
			$('#sharebox').animate({bottom: '+107px'}, {queue: false});
		},
		function(){
			$('#thumbs').css('opacity', '6');
			$('#thumbs').animate({bottom: '-107px'}, {queue: false});
			$('#sharebox').animate({bottom: '0px'}, {queue: false});
		}
	);
	
	$('#info').hover(
		function(){
			$('#info').animate({right: '0px'}, {queue: false});
		},
		function(){
			$('#info').animate({right: '-230px'}, {queue: false});
		}
	);
	
	$("#portfolio").click(function(){
		$('#thumbs').css('opacity', '1');
		$('#thumbs').animate({bottom: '0px'}, {queue: false});
		$('#sharebox').animate({bottom: '+107px'}, {queue: false});
	});
	
	$("#thumbslabel").click(function(){
		$('#thumbs').css('opacity', '1');
		$('#thumbs').animate({bottom: '0px'}, {queue: false});
		$('#sharebox').animate({bottom: '+107px'}, {queue: false});
	});
	
	/*$("#logo").click(function(){
		$("div#scrollable").smoothDivScroll("moveToElement", "number", 1);
		$('#thumbs').css('opacity', '1');
		$('#thumbs').animate({bottom: '0px'}, {queue: false});
	});*/

	$('#logo').toggle(function() {
  		$('#nav').css('visibility', 'hidden');
			$('#logo2').css('visibility', 'hidden');
		}, function() {
  		$('#nav').css('visibility', 'visible');
			$('#logo2').css('visibility', 'visible');
	});

	$('#i').toggle(function() {
  		$('#info').animate({right: '0px'}, {queue: false});
		}, function() {
  		$('#info').animate({right: '-230px'}, {queue: false});
	});

	$('#menu li').click(function(){
		if($('#pagebox').is(':visible')){
			$('#pagebox').hide();
		}else if(window.location.hash != "#portfolio"){
			if(window.location.hash != "#share"){
				$('#pagebox').show();
			}
		}
	});
	
	

});






















