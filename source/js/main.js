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


titleTwo = function(){    
	$(".intro-text" ).text('We are a creative agency rooted in beautiful Northern Ontario.');
}

titleThree = function(){    
	$(".intro-text" ).text('You do great work. We get it noticed.');
}

showNav = function(){    
	$(".nav-main" ).addClass("show-nav");
}

titleFlip()
showNav()
window.setTimeout(titleFlip, 3000);
window.setTimeout(titleFlip, 4000);
window.setTimeout(titleFlip, 7000);
window.setTimeout(titleFlip, 8000);

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

    if (window.innerWidth >= 769 && scrollTop >= iconOne - 700){
    $(".icon-chart").css({opacity : map_range(scrollTop, iconOne - 700, iconOne - 500, 0, 1)});
    }

  if (window.innerWidth >= 769 && scrollTop >= iconOne - 600){
    $(".icon-one").addClass("icon-visible")
    }

  if (window.innerWidth >= 769 && scrollTop >= iconOne - 550){
    $(".icon-two").addClass("icon-visible")
    }

  if (window.innerWidth >= 769 && scrollTop >= iconOne - 500){
    $(".icon-three").addClass("icon-visible")
    }

  else if(window.innerWidth >= 769 && scrollTop <= iconOne - 600){
  	$(".icon-one").removeClass("icon-visible")
  }

  else if(window.innerWidth >= 769 && scrollTop <= iconOne - 550){
  	$(".icon-two").removeClass("icon-visible")
  }

  else if(window.innerWidth >= 769 && scrollTop <= iconOne - 500){
  	$(".icon-three").removeClass("icon-visible")
  }

    else {
      
    }
});

});



