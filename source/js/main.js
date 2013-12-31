/* =Modernizer replace SVG with PNG
============================================================================== */


if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
}



/* =Header color change
============================================================================== */




colorSwapOne = function(){
    $("#video-overlay").toggleClass("is-hidden");
}

colorSwapTwo = function(){
    $("#video-overlay-two").toggleClass("is-hidden");
}


window.setInterval(colorSwapOne, 5000);

window.setInterval(colorSwapTwo, 5000);




/* =Intro Animations
============================================================================== */

titleFlip = function(){
    $(".intro-text").toggleClass("flipped");
}

titleFlipLast = function(){
    $(".intro-text").removeClass("flipped");
    $(".intro-text").addClass("flipped--last");
}


titleTwo = function(){    
	$(".intro-text" ).text('We are a creative agency rooted in beautiful Northern Ontario.');
}

titleThree = function(){    
	$(".intro-text" ).text('You do great work. We get it noticed.');
}

showNav = function(){    
	$(".nav-main" ).addClass("show-nav");
}

showBtn = function(){    
	$("#intro-btn" ).addClass("intro-btn--visible");
}



titleFlip()
showNav()

window.setTimeout(titleFlip, 3000);
window.setTimeout(titleFlip, 4000);
window.setTimeout(titleFlip, 7000);
window.setTimeout(titleFlip, 8000);
window.setTimeout(titleFlipLast, 9500);
window.setTimeout(showBtn, 10000);

window.setTimeout(titleTwo, 3500);
window.setTimeout(titleThree, 7500);




/* =Parallax header
============================================================================== */

map_range = function(value, low1, high1, low2, high2) {
 if (value < low1) { return low2; }
 else if (value > high1) { return high2; }
 else return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


$(window).load(function(){

  var iconOne = $(".icon-one").offset().top;


$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

    if (window.innerWidth >= 960 && scrollTop >= iconOne - 700){
    $(".chart-mask").css({height : 156});
    $(".chart-mask").css({transform : "scaleX(1)"});
    $(".chart-mask").css({MozTransform : "scaleX(1)"});
    $(".chart-mask").css({WebkitTransform : "scaleX(1)"});
    $(".chart-mask").css({msTransform : "scaleX(1)"});
    $(".chart-mask").css({OTransform : "scaleX(1)"});
    }

    if (window.innerWidth >= 960 && scrollTop >= iconOne - 650){
    $(".chart-mask").css({height : map_range(scrollTop, iconOne - 650, iconOne - 533, 156, 89)});
    }

    if (window.innerWidth >= 960 && scrollTop >= iconOne - 533){
    $(".chart-mask").css({transform : "scaleX" + "(" + map_range(scrollTop, iconOne - 533, iconOne - 433, 1, 0.004) + ")"});
    $(".chart-mask").css({MozTransform : "scaleX" + "(" + map_range(scrollTop, iconOne - 533, iconOne - 433, 1, 0.004) + ")"});
    $(".chart-mask").css({WebkitTransform : "scaleX" + "(" + map_range(scrollTop, iconOne - 533, iconOne - 433, 1, 0.004) + ")"});
    $(".chart-mask").css({msTransform : "scaleX" + "(" + map_range(scrollTop, iconOne - 533, iconOne - 433, 1, 0.004) + ")"});
    $(".chart-mask").css({OTransform : "scaleX" + "(" + map_range(scrollTop, iconOne - 533, iconOne - 433, 1, 0.004) + ")"});

    }

    if (window.innerWidth >= 960 && scrollTop >= iconOne - 433){
    $(".chart-mask").css({height : map_range(scrollTop, iconOne - 433, iconOne - 333, 89, 0)});
    }



  if (window.innerWidth >= 769 && scrollTop >= iconOne - 600){
    $(".icon-one").addClass("icon-visible")
    }

  if (window.innerWidth >= 769 && scrollTop >= iconOne - 500){
    $(".icon-two").addClass("icon-visible")
    }

  if (window.innerWidth >= 769 && scrollTop >= iconOne - 400){
    $(".icon-three").addClass("icon-visible")
    }

  else if(window.innerWidth >= 769 && scrollTop <= iconOne - 600){
  	$(".icon-one").removeClass("icon-visible")
  }

  else if(window.innerWidth >= 769 && scrollTop <= iconOne - 500){
  	$(".icon-two").removeClass("icon-visible")
  }

  else if(window.innerWidth >= 769 && scrollTop <= iconOne - 400){
  	$(".icon-three").removeClass("icon-visible")
  }

    else {
      
    }
});

});



