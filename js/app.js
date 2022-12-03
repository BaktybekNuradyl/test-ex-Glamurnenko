
// scroll to top
$('.scroll_top').click(function(){
    $('html, body').animate({scrollTop: 0}, 1000);
    });


    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $('.scroll_top').addClass('active');
        }
        else{
            $('.scroll_top').removeClass('active');
        }
    });



// nav fix element
   
var num = 0; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.nav__main').addClass('nav__fixed');
    } else {
        $('.nav__main').removeClass('nav__fixed');
    }
});