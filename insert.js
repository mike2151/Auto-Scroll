var page = $('html, body');


page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
       page.stop();
   });

page.animate({ scrollTop: $(document).height() }, 1000000/(speed + 1), function(){
       page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
   });
