document.addEventListener("DOMContentLoaded", function () {
    //footer 이벤트
    $("#privacypolicy_btn").click(function(){
        $("#privacypolicy").stop().fadeIn(300)
	});
    $("#termsofuse_btn").click(function(){
        $("#termsofuse").stop().fadeIn(300)
	});
    $(".pop_close").click(function(){
        $(".popup_wrap").stop().fadeOut(300)
	});
});