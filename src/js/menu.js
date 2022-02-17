document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.menu_items', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop : true,
        navigation: {
            nextEl: '.menu-swiper-left',
            prevEl: '.menu-swiper-right',
        },
        mousewheel: {
            invert: true,
        },
        breakpoints: { // 화면의 넓이가 320px 이상일 때 
            320: { 
                slidesPerView: 2, 
                spaceBetween: 10 
            }, 
            // 화면의 넓이가 640px 이상일 때 
            640: { 
                slidesPerView: 4, 
                spaceBetween: 10 
            } 
        }
    });
});