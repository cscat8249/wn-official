document.addEventListener("DOMContentLoaded", function () {
    
    // //메뉴
    // if( scrollTop > 0 ){
    //     document.querySelector(".paraNav").classList.add("show");
    // } else {
    //     document.querySelector(".paraNav").classList.remove("show");
    // }



    // 가맹문의 이동 이벤트
    let member_btn = document.querySelector('#member_btn');
    member_btn.addEventListener('click',e => {
        // let href = member_btn.getAttribute('href');
        e.preventDefault();
        // console.log(href)
        document.querySelector('#affiliateinquiry_section').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // nav 이동 이벤트
    document.querySelectorAll('.menu_nav ul li a').forEach(li => {
        li.addEventListener('click',e => {
            e.preventDefault();
            document.querySelector(li.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    

    //스크롤 이벤트
    window.addEventListener('scroll',function(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY; 
        if( scrollTop <= document.getElementById('brand_section').offsetTop - 100){
            document.querySelectorAll('.menu_nav ul li').forEach(li => {
                li.classList.remove('active');
            });
        }
        if( scrollTop >= document.getElementById('brand_section').offsetTop - 100){
            document.querySelectorAll('.menu_nav ul li').forEach(li => {
                li.classList.remove('active');
            });
            document.querySelector('.menu_nav ul li:nth-child(1)').classList.add("active");
        }
        if( scrollTop >= document.getElementById('menu_section').offsetTop - 100){
            document.querySelectorAll('.menu_nav ul li').forEach(li => {
                li.classList.remove('active');
            });
            document.querySelector('.menu_nav ul li:nth-child(2)').classList.add('active');
        }
        if( scrollTop >= document.getElementById('serviceinfo_section').offsetTop - 100){
            document.querySelectorAll('.menu_nav ul li').forEach(li => {
                li.classList.remove('active');
            });
            document.querySelector('.menu_nav ul li:nth-child(3)').classList.add('active');
        }
        if( scrollTop >= document.getElementById('storeinfo_section').offsetTop - 100){
            document.querySelectorAll('.menu_nav ul li').forEach(li => {
                li.classList.remove('active');
            });
            document.querySelector('.menu_nav ul li:nth-child(4)').classList.add('active');
        }
        if( scrollTop >= document.getElementById('stroy_section').offsetTop - 100){
            document.querySelectorAll('.menu_nav ul li').forEach(li => {
                li.classList.remove('active');
            });
            document.querySelector('.menu_nav ul li:nth-child(5)').classList.add('active');
        }
        if( scrollTop >= document.getElementById('foundedcost_section').offsetTop - 100){
            document.querySelectorAll('.menu_nav ul li').forEach(li => {
                li.classList.remove('active');
            });
            document.querySelector('.menu_nav ul li:nth-child(6)').classList.add('active');
        }
        if( scrollTop >= document.getElementById('affiliateinquiry_section').offsetTop - 100){
            document.querySelectorAll('.menu_nav ul li').forEach(li => {
                li.classList.remove('active');
            });
        }
    });


    const bigmenu = document.querySelectorAll('.menu_list_ul li');
    const typepanel = document.querySelectorAll('.panel');
    bigmenu.forEach((item, index) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            bigmenu.forEach(item => item.classList.remove('on'));
            item.classList.add('on');

            typepanel.forEach(item => item.classList.remove('on'));
            typepanel[index].classList.add('on');
        });
    });
    

    //인스타 피드 이벤트
    const feed = new Instafeed({
        accessToken: 'IGQVJVUDBQd0FnSmtlZA0FmbHNfMi1IN1hpaFJ0UDVNUWFfOVdVeTdBdkRFOXhhWTRuczdQZAExGdlY2R3N6Y2dNS3RyY1BtUXRFMFVrQ2VlOXpKWUhYWldZAbElBcWpUaUYzM1RCdW1wYWl6ZAzBkejF1UwZDZD',
        // accessToken: 'IGQVJYeWt4cS1ibmlyNlVtWDU0c3E3RnI5dWhzZAnNKUVF4Y1JzbkZAsc0taZAEJQSXlxRFBBNi1UaUZA6VUtqd3pfUzUxUFlIUzVfcHlVUE9hX0Rody10VXF3ZAU5FSTh5a2s4bE1KYmRCSXNPVXNUd3JudwZDZD',
        target:'gallery',
        template: 
            '<li class="item">'+
                '<a href="{{link}}" target="_blank">'+
                    '<img title="{{caption}}" src="{{image}}"/>'+
                    // '<h3>{{caption}}</h3>'+
                    // '<div>{{username}}</div>'+
                '</a>'+
            '</li>',
        limit: 9
    });
    feed.run();
   
});