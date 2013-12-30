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
