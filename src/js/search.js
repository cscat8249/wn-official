// String.prototype.replaceAll = function(org, dest) {
//     return this.split(org).join(dest);
// }

// xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200) {
//         returnJosn = json.parse(xhttp.response)
//         returnArray = [];

//         for (let i=0; i < returnJosn.length; i++){
//             returnArray.push(`
//                 <li>
//                     ${returnJosn[i].id}
//                 </li>
//             `)
//         }

//         const targetHtml = document.getElementById('map_list');
//         targetHtml.innerHTML = returnArray.toString().replaceAll(",","");
//     }
// }
// xhttp.open('POST','/data/data.json',true);
// xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// xhttp.send("data=0");
$(document).ready(function(){

    let listBtn = document.querySelector('#list_search_btn');

    listBtn.addEventListener("click",function(){
        let params = {
            address1 : $('#address1').val(),
            address2 : $('#address2').val(),
        }
        console.log("params ==>" + params);
        // console.log("address2 ==>" + address2);
        $.ajax({
            dataType: "json",
            url: "/data/data.json",
            data: params,
            mimeType: "application/json",
            success: function(result){
                var tableData = "";
                $.each(result, function(index, value) {
                    tableData += '<li>';
                    tableData += "<p class='stor_numer_text'>"+value.id+'호점</p>';
                    tableData += "<p> 주소 : <span>"+ value.address1+ " "+ value.address2 + " " + value.address3 +'</span></p>';
                    tableData += "<p> Tel <span>: " + value.phon + "</span></p>";
                    tableData += '</li>';
                });
                $("#map_list").append(tableData);
            }
        });
        
    });
    $.ajax({
        dataType: "json",
        url: "/data/data.json",
        // data: params,
        mimeType: "application/json",
        success: function(result){
            var tableData = "";
            $.each(result, function(index, value) {
                tableData += '<li>';
                tableData += "<p class='stor_numer_text'>"+value.id+'호점</p>';
                tableData += "<p> 주소 : <span>"+ value.address1+ " "+ value.address2 + " " + value.address3 +'</span></p>';
                tableData += "<p> Tel <span>: " + value.phon + "</span></p>";
                tableData += '</li>';
            });
            $("#map_list").append(tableData);
        }
    });

    
});