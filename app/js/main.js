$(function(){
	const swiper = new Swiper('.service-slider__container', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 70,

		navigation: {
		  nextEl: '.service-slider__next',
		  prevEl: '.service-slider__prev',
		},
	 
	 });
});