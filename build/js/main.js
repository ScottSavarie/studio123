/* =Modernizer replace SVG with PNG
============================================================================== */
Modernizr.svg||$('img[src*="svg"]').attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),colorSwapOne=function(){$("#video-overlay").toggleClass("is-hidden")},colorSwapTwo=function(){$("#video-overlay-two").toggleClass("is-hidden")},window.setInterval(colorSwapOne,5e3),window.setInterval(colorSwapTwo,5e3);