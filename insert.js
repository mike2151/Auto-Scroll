var page = $('html, body');


page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
       page.stop();
   });

var height_to_scroll = $(document).height()-$(window).height();

page.animate({ scrollTop: height_to_scroll }, (height_to_scroll * 6)/(speed/100.0), function(){
       page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
   });
