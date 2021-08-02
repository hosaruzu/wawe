$(function () {

    $(window).scroll(function() {
      if ($('.header__top').offset().top > 40) {
        $('.header__top').addClass('header__top--active')
      } else {
        $('.header__top').removeClass('header__top--active')
      }
    });

  $(".menu a, .header__top-inner a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });

  $(".blog__slider").slick({
    dots: true,
    arrows: false,
  });

  $('.menu__toggle, .menu__list').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');

  });

  var mixer = mixitup(".gallery__content");
});