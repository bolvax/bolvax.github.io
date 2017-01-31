// Mobile menu
$('.header__toggle').click(function() {
    if ($('.header__nav').hasClass('header__nav_mobile')) {
        $('.header__nav').removeClass('header__nav_mobile');
    } else {
        $('.header__nav').addClass('header__nav_mobile');
    }
});

$('.header__nav a').click(function() {
    if ($('.header__nav').hasClass('header__nav_mobile')) {
        $('.navigation').removeClass('header__nav_mobile');
        $('.header__nav').removeClass('header__nav_mobile');
    }
});
// Mobile menu
// PARALLAX
$(document).ready(function() {
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
});
function parallaxScroll(){
    var current = $(window).scrollTop();
    if( $(window).width() > 1200){
        $('#parallax-1').css('background-position-y',(100+(current*.3))+'%');
        $('#parallax-2').css('background-position-y',(100+(current*.2))+'%');
        $('#parallax-3').css('background-position-y',(100+(current*.1))+'%');
        $('#parallax-laptop').css('background-position-y',(0-current*2)+'%');
        $('#parallax-phone').css('background-position-y',(0-current*0.7)+'%');
    }else if($(window).width() > 1024){
        $('#parallax-1').css('background-position-y',(100+(current*.1))+'%');
        $('#parallax-2').css('background-position-y',(100+(current*.07))+'%');
        $('#parallax-3').css('background-position-y',(100+(current*.04))+'%');
    }
}
// PARALLAX


///Smooth Scrolling
$('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 500);
    return false;
});
///Smooth Scrolling