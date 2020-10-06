$(function(){
    
//counter inilitize js
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
        });
    }); 

//Back-to-top js
$('.back-top').click(function(){
    $('html, body').animate({scrollTop:0},1500)
});
    
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.back-top').fadeIn();
    }
    else {
        $(".back-top").fadeOut();
    }
    if(scrolling > 200){
        $('.navbar').addClass('navbar2')
    }
    else {
        $(".navbar").removeClass('navbar2');
    }
});
    
//Animation scroll js
var html_body = $('html, body');
$('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 80
            }, 1500,);
            return false;
        }
    }
});
    
// Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });    
    
//Slick js   
$('.feedback-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '.left',
    nextArrow: '.right',
    arrows:true,
    speed:1500,
});
    
// team slider
$('.teamslider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    speed:1500,
    
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});
         
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});