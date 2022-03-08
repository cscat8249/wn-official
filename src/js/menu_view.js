document.addEventListener("DOMContentLoaded", function () {

    
    
    
    
});

function menuitemViewajax(id) {
    var mod = {
        "id" : id
    }
    $.ajax({
        url:'https://first2cnt.cafe24.com/menu/viewboard2.php',
        type:'get',
        data: mod,
        dataType:'json',
    }).done(function(data){
        var length = data.menu_id.length; 
        var htmlArr=[]; 
        var html = '';
        for(var i=0; i < length; i++){
            html += "<button class='prev'>";
            html += "<i class='material-icons'>arrow_back_ios_new</i></i>";
            html += "</button>";
            html += "<div class='item_info_content'>";
            html += "<div class='item_img_wrap'>";
            html += "<img src='/wn-official/src/img/menu/"+ data.path[i] +"' alt='간장 오리 불고기'/>";
            html += "</div>"; 
            html += "<div class='item_info_wrap'>";
            html += "<div class='item_title'>";
            html += "<h1 class='title'>"+ data.menu_name[i] +"</h1>";
            html += "</div>";
            html += "<div class='item_cooking_info'>";
            html += "<div class='cooking_many_peple_wrap'>";
            html += "<img src='/wn-official/src/img/icon/many_people_icon.png' alt='간장오리불고기 몇인분 아이콘'>";
            html += "<p class='info'>"+ data.many_peple[i] +"</p>";
            html += "</div>";
            html += "<div class='cooking_difficulty_wrap'>";
            html += "<img src='/wn-official/src/img/icon/cooking_difficulty_icon.png' alt='간장오리불고기 요리나이도 아이콘'>";
            if(data.difficulty[i] == 1){
                html += "<p class='info'>난이도 하</p>";
            } else if (data.difficulty[i] == 2) {
                html += "<p class='info'>난이도 중</p>";
            } else {
                html += "<p class='info'>난이도 상</p>";
            }
            html += "</div>";
            html += "<div class='cooking_timer_wrap'>";
            html += "<img src='/wn-official/src/img/icon/cooking_time_icon.png' alt='간장오리불고기 조리시간 아이콘'>";
            html += "<p class='info'>"+ data.timer[i] +"분</p>";
            html += "</div>";
            html += "<div class='cooking_refrigerator_wrap'>";
            html += "<img src='/wn-official/src/img/icon/refrigerator_icon.png' alt='간장오리불고기 보관방법 아이콘'>";
            html += "<p class='info'>"+ data.refrigerator[i] +"</p>";
            html += "</div>";
            html += "</div>";
            html += "<div class='item_info'>";
            html += "<div class='item_summary'>";
            html += "<p class='title'>상품요약정보</p>";
            html += "<p class='desc'>";
            html +=  data.summary[i];
            html += "</p>";
            html += "</div>";
            html += "<div class='item_origin'>";
            html += "<p class='title'>원산지html</p>";
            html += "<p class='desc'>";
            html += data.origin[i];
            html += "</p>";
            html += "</div>";
            html += "<div class='item_sns'>";
            html += "<p class='title'>SNS 공유html</p>";
            html += "<a href='#none'>";
            html += "<img src='/wn-official/src/img/icon/sns_share_icon.png' alt='카카오톡 공유 아이콘'>";
            html += "</a>";
            html += "</div>";
            html += "</div>";
            html += "</div>";
            html += "</div>";
            html += "<button class='next'>";
            html += "<i class='material-icons'>arrow_forward_ios</i>";
            html += "</button>";
        }
        htmlArr.push(html);
        $('#menuView').html(htmlArr);
    });
}