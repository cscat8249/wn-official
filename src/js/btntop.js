document.addEventListener("DOMContentLoaded", function(){
    let fixed = false;
    let offset;
    let topbtnElement = document.querySelector('.btn_top');
        
    try {
        offset = 0;
    } catch (e) {
        offset = 0;
    }

    function topscrollHandler() {
        let scrollTop = window.scrollY || document.querySelector('html').scrollTop;
        if(fixed === false && scrollTop > offset) {
            topbtnElement.classList.add('scroll');
            fixed = true;
        } else if (fixed === true && scrollTop <= offset) {
            topbtnElement.classList.remove('scroll');
            fixed = false;
        }
    }
    topbtnElement.addEventListener('click', function(e) {
        TweenMax.to('html, body', {scrollTop: 0})
    });

    window.addEventListener('scroll', function(e) {
        topscrollHandler();
    });
    topscrollHandler();
});