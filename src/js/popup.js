$(document).ready(function(){
    if(localStorage.getItem("not_open_day") == "Y" && (new Date().getTime() < localStorage.getItem("not_open_day_expire"))){
        $("#draggable").hide();
    } else {
        $("#draggable").draggable();
        //오늘 하루 열지 않기
        $("#not_open_day").click(function(){                        
            localStorage.setItem("not_open_day","Y");
            localStorage.setItem("not_open_day_expire", new Date().getTime() + (24*60*60*1000));
            $("#draggable").hide();
        });            
        //닫기
        $("#close_popup").click(function(){
            $("#draggable").hide();
        });                     
    }              
});
        