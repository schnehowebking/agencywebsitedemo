/*------------------------------------------------------------------
Initialize Swiper
-------------------------------------------------------------------*/
"use strict";
var swiper = new Swiper('.testimonials', {
  speed: 600,
  slidesPerView: "auto",
  spaceBetween: 0,
  pagination: {
	el: '.swiper-pagination',
	dynamicBullets: true,
	clickable : true
  },
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  },
});