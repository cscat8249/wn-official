document.addEventListener("DOMContentLoaded", function(){
    let fixed = false;
    let offset;
    let hederElement = document.querySelector('.header_wrap');
    
    try {
        offset = 0;
    } catch (e) {
        offset = 0;
    }
    
    function scrollHandler() {
        let scrollTop = window.scrollY || document.querySelector('html').scrollTop;
        if(fixed === false && scrollTop > offset) {
            hederElement.classList.add('is-fixed');
            fixed = true;
        } else if (fixed === true && scrollTop <= offset) {
            hederElement.classList.remove('is-fixed');
            fixed = false;
        }
    }
    window.addEventListener('scroll', function(e) {
        scrollHandler();
    });
    scrollHandler();
});


