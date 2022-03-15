document.addEventListener("DOMContentLoaded", function () {
    $('img[usemap]').rwdImageMaps();

    new Swiper('.market_img_items', {
        slidesPerView: 1,
        spaceBetween: 50,
        loop : true,
        mousewheel: {
            invert: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });

    new Swiper('.smart_img_items', {
        slidesPerView: 3,
        spaceBetween: 24,
        loop : true,
        navigation: {
            nextEl: '.travel-swiper-right',
            prevEl: '.travel-swiper-left',
        },
        mousewheel: {
            invert: true,
        },
    });
});