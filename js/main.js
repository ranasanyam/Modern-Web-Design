$(document).ready(function(){
	let nav_offset_top = $(".header_area").height() + 20;
	function navbarFixed() {
		if($(".header_area").length) {
			$(window).scroll(function() {
				let scroll = $(window).scrollTop();
				if(scroll >= nav_offset_top) {
					$(".main-menu").addClass("navbar_fixed");
				} else {
					$(".main-menu").removeClass("navbar_fixed");
				}
			});
		}
	}
	navbarFixed();



	var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      loop:true,
      autoplay:true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl : '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el:'.swiper-scrollbar',
      },
    });
  AOS.init();
});