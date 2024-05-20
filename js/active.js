$(document).ready(function(){

  $('#mobile-menu-active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'

  });

    // slider  
$('.slider-active').slick({
    infinite: true,
    arrows:false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  // testimonial
$('.testimonial-active').slick({
    infinite: true,
    arrows:false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
  // brand
$('.brand-active').slick({
    infinite: true,
    arrows:false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: false,
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
})