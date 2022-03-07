document.addEventListener("DOMContentLoaded", function () {
    let dep1_items = document.querySelectorAll('.dep1_item');
    let menu_items = document.querySelectorAll('.menu_items');

    let all = document.querySelector('#all');
    let meat = document.querySelector('#meat');
    let koreafood = document.querySelector('#koreafood');
    let snackbar = document.querySelector('#snackbar');
    let globalfood = document.querySelector('#globalfood');
    let special = document.querySelector('#special');
    let dessert = document.querySelector('#dessert');

    var swiperContainer = new Swiper('.menu_list', {
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
        autoplay: {
            delay: 3000,
        },
    });

    function menuitemListajax(mod){
        var mod = {
            'mod' : mod
        }
        swiperContainer.removeAllSlides();
        $.ajax({
            url:'https://first2cnt.cafe24.com/menulist.php',
            type:'post',
            data: mod,
            dataType:'json',
        }).done(function(data){
            var length = data.id.length; 
            var htmlArr=[]; 
            let html = "";
            for(var i=0; i < length; i++){
                html += "<div class='swiper-slide item'>";
                html += "<div class='img_wrap'>";
                html += "<img src='/wn-official/src/img/menu/"+data.path[i]+"' alt='"+data.menu_name[i]+"'/>";
                html += "</div>";
                html += "<div class='text_wrap'>";
                html += "<p>" + data.menu_name[i] + "</p>";
                html += "</div>"
                html += "</div>";
            }
            htmlArr.push(html);
            closeLoadingWithMask();
            swiperContainer.appendSlide(htmlArr); 
            swiperContainer.update();
        });
    }

    menuitemListajax();

    dep1_items.forEach(dep1_item => {
        dep1_item.addEventListener('click', function(){
            let viewIdx = this.getAttribute('subSeq');
            let mod = this.getAttribute('id');
            // alert(mod);
            LoadingWithMask();
            menuitemListajax(mod);
            dep1_items.forEach((thsIdx) => {
                if(thsIdx.getAttribute('subSeq') == viewIdx){
                    thsIdx.classList.add('active');
                } else {
                    thsIdx.classList.remove('active');
                }
            })
        });
    });
});