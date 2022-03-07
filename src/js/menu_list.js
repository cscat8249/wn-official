document.addEventListener("DOMContentLoaded", function () {
    let dep1_items = document.querySelectorAll('.dep1_item');
    
    function menuitemListajax(mod) {
        var mod = {
            'mod' : mod
        }
        // $('#menu_content').append(html);
        $.ajax({
            url:'https://first2cnt.cafe24.com/menulist.php',
            type:'post',
            data: mod,
            dataType:'json',
        }).done(function(data){
            var length = data.id.length; 
            var htmlArr=[]; 
            var html = '';
            for(var i=0; i < length; i++){
                html += '<li class="item">';
                html += '<div class="item_img_wrap">';
                html += '<img src="/wn-official/src/img/menu/'+ data.path[i] +'"alt="'+ data.menu_name[i] + '">';
                html += '</div>';
                html += '<div class="text_wrap">';
                html += '<p>' + data.menu_name[i] + '</p>';
                html += '</div>';
                html += '</li>';
            }
            htmlArr.push(html);
            $('#menu_content').html(htmlArr);
            closeLoadingWithMask();
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