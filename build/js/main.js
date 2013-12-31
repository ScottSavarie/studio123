/* =Modernizer replace SVG with PNG
============================================================================== */
Modernizr.svg||$('img[src*="svg"]').attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),colorSwapOne=function(){$("#video-overlay").toggleClass("is-hidden")},colorSwapTwo=function(){$("#video-overlay-two").toggleClass("is-hidden")},window.setInterval(colorSwapOne,5e3),window.setInterval(colorSwapTwo,5e3),titleFlip=function(){$(".intro-text").toggleClass("flipped")},titleFlipLast=function(){$(".intro-text").removeClass("flipped"),$(".intro-text").addClass("flipped--last")},titleTwo=function(){$(".intro-text").text("We are a creative agency rooted in beautiful Northern Ontario.")},titleThree=function(){$(".intro-text").text("You do great work. We get it noticed.")},showNav=function(){$(".nav-main").addClass("show-nav")},showBtn=function(){$("#intro-btn").addClass("intro-btn--visible")},titleFlip(),showNav(),window.setTimeout(titleFlip,3e3),window.setTimeout(titleFlip,4e3),window.setTimeout(titleFlip,7e3),window.setTimeout(titleFlip,8e3),window.setTimeout(titleFlipLast,9500),window.setTimeout(showBtn,1e4),window.setTimeout(titleTwo,3500),window.setTimeout(titleThree,7500),map_range=function(e,t,n,r,i){return e<t?r:e>n?i:r+(i-r)*(e-t)/(n-t)},$(window).load(function(){var e=$(".icon-one").offset().top;$(window).scroll(function(t){var n=$(document).scrollTop();window.innerWidth>=960&&n>=e-700&&($(".chart-mask").css({height:156}),$(".chart-mask").css({transform:"scaleX(1)"}),$(".chart-mask").css({MozTransform:"scaleX(1)"}),$(".chart-mask").css({WebkitTransform:"scaleX(1)"}),$(".chart-mask").css({msTransform:"scaleX(1)"}),$(".chart-mask").css({OTransform:"scaleX(1)"})),window.innerWidth>=960&&n>=e-650&&$(".chart-mask").css({height:map_range(n,e-650,e-533,156,89)}),window.innerWidth>=960&&n>=e-533&&($(".chart-mask").css({transform:"scaleX("+map_range(n,e-533,e-433,1,.004)+")"}),$(".chart-mask").css({MozTransform:"scaleX("+map_range(n,e-533,e-433,1,.004)+")"}),$(".chart-mask").css({WebkitTransform:"scaleX("+map_range(n,e-533,e-433,1,.004)+")"}),$(".chart-mask").css({msTransform:"scaleX("+map_range(n,e-533,e-433,1,.004)+")"}),$(".chart-mask").css({OTransform:"scaleX("+map_range(n,e-533,e-433,1,.004)+")"})),window.innerWidth>=960&&n>=e-433&&$(".chart-mask").css({height:map_range(n,e-433,e-333,89,0)}),window.innerWidth>=769&&n>=e-600&&$(".icon-one").addClass("icon-visible"),window.innerWidth>=769&&n>=e-500&&$(".icon-two").addClass("icon-visible"),window.innerWidth>=769&&n>=e-400?$(".icon-three").addClass("icon-visible"):window.innerWidth>=769&&n<=e-600?$(".icon-one").removeClass("icon-visible"):window.innerWidth>=769&&n<=e-500?$(".icon-two").removeClass("icon-visible"):window.innerWidth>=769&&n<=e-400&&$(".icon-three").removeClass("icon-visible")})});