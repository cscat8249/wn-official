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
            delay: 4000,
        },
    });
});