var swiper = new Swiper(".slider-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroupSkip: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
