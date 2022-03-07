document.addEventListener("DOMContentLoaded", function () {
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
        accessToken: 'IGQVJYMFhtWjNUN2tHRTVwaEhHVldQWmpLSTJ6ZA0ZAWb3VQck5JYnZACdmdpSlZATRlI1WmZArUmE0SHRJemVUOVhTdWE5anpsNDRCTHZAyTE9RVkJGUmdRYVc5aGs1b0YtWWtPSUpyRDJFSjVUOFA4a05ydQZDZD',
        target:'gallery',
        template: 
            '<li class="item">'+
                '<a href="{{link}}" target="_blank">'+
                    '<img title="{{caption}}" src="{{image}}"/>'+
                '</a>'+
            '</li>',
        limit: 9
    });
    feed.run();
});

// 로딩 출력
function LoadingWithMask() {
    //화면에 출력할 마스크를 설정해줍니다.
    var loadingImg ='';
    loadingImg +="<img src='/wn-official/src/img/bg/Spinner.gif' style='position: absolute; top: 50%; left: 50%; display: block; margin: 0px auto; transform: translate(-50%, -50%); width: 10%;'/>";
    
    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
    $('#mask').css({
        'position': 'fixed',
        'display': 'none',
        'width' : '100%',
        'height': '100%',
        'left': 0, 
        'top': 0,
        'z-index': 9000,
        'background': 'rgba(0, 0, 0, 0.7)',
    });
  
    //마스크 표시
    $('#mask').show();
  
    //로딩중 이미지 표시
    $('#loadingImg').append(loadingImg);
    $('#loadingImg').show();
}

function closeLoadingWithMask() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').empty(); 
}