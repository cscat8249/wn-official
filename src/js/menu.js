document.addEventListener("DOMContentLoaded", function () {
    let dep1_items = document.querySelectorAll('.dep1_item');
    let menu_items = document.querySelectorAll('.menu_items');

    dep1_items.forEach(dep1_item => {
        dep1_item.addEventListener('click', function(){
            let viewIdx = this.getAttribute('subSeq');
            menu_items.forEach((thsIdx,index) => {
                if(index == viewIdx){
                    thsIdx.style.display = "flex";
                } else {
                    thsIdx.style.display = "none";
                }
            });
            clicks.forEach((thsIdx) => {
                if(thsIdx.getAttribute('subSeq') == viewIdx){
                    thsIdx.classList.add('active');
                } else {
                    thsIdx.classList.remove('active');
                }
            })
        });
    });

    var swiper = new Swiper('.all', {
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
    });

    var swiper = new Swiper('.meat', {
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
    });

    var swiper = new Swiper('.chicken', {
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
    });

    var swiper = new Swiper('.koreafood', {
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
    });

    var swiper = new Swiper('.globalfood', {
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
    });

    var swiper = new Swiper('.snackbar', {
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
    });

    var swiper = new Swiper('.dessert', {
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
    });
});