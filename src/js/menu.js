document.addEventListener("DOMContentLoaded", function () {
    let dep1_items = document.querySelectorAll('.dep1_item');
    let menu_items = document.querySelectorAll('.menu_items');

    let all = document.querySelector('#all');
    let meat = document.querySelector('#meat');
    let chicken = document.querySelector('#chicken');
    let koreafood = document.querySelector('#koreafood');
    let globalfood = document.querySelector('#globalfood');
    let snackbar = document.querySelector('#snackbar');
    let dessert = document.querySelector('#dessert');

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
            dep1_items.forEach((thsIdx) => {
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

    all.addEventListener('click', function(){
        new Swiper('.all', {
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

    meat.addEventListener('click', function(){
        new Swiper('.meat', {
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

    chicken.addEventListener('click', function(){
        new Swiper('.chicken', {
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

    koreafood.addEventListener('click', function(){
        new Swiper('.koreafood', {
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

    globalfood.addEventListener('click', function(){
        new Swiper('.globalfood', {
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

    snackbar.addEventListener('click', function(){
        new Swiper('.snackbar', {
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

    dessert.addEventListener('click', function(){
        new Swiper('.dessert', {
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
});