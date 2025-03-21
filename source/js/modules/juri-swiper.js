/* eslint-disable no-undef */

const juriSwiper = new Swiper('.juri__swiper-container', {
  loop: 'true',
  spaceBetween: 40,

  navigation: {
    nextEl: '.juri__button-next-js',
    prevEl: '.juri__button-prev-js'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
    }
  },

  mousewheel: true,
  keyboard: true,
});

juriSwiper.init();
