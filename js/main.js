$(function () {

  $(".blog__slider").slick({
    dots: true,
    arrows: false,
  });

  $('.menu__toggle').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');

  });

  var mixer = mixitup(".gallery__content");
});