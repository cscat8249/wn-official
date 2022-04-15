document.addEventListener("DOMContentLoaded", function () {
    let storname = document.querySelector('#storname');
    let telnumber1 = document.querySelector('#telnumber1');
    let telnumber2 = document.querySelector('#telnumber2');
    let telnumber3 = document.querySelector('#telnumber3');
    let hopearea = document.querySelector('#hopearea');

    let agreement = document.querySelector('#agreement');
    let form_submit = document.querySelector('#form_submit');

    $('#telnumber1').on('keyup', function() {
        if(this.value.length == 3) {
           $('#telnumber2').focus();
        }
    });

    $('#telnumber2').on('keyup', function() {
        if(this.value.length == 4) {
           $('#telnumber3').focus();
        }
    });

    form_submit.addEventListener('click',function(e){
        e.preventDefault();
        LoadingWithMask();
        if(storname.value.length === 0) {
            alert('상호명을 입력하세요.');
            closeLoadingWithMask();
            storname.focus();
            return false;
        }
        if(telnumber1.value.length === 0 || telnumber2.value.length === 0 || telnumber3.value.length === 0){
            alert('휴대폰 번호를 입력하세요.');
            closeLoadingWithMask();
            telnumber1.focus();
            return false;
        }
        if(hopearea.value.length === 0) {
            alert('지역을 입력하세요.');
            closeLoadingWithMask();
            hopearea.focus();
            return false;
        }

        if(!input[name="smartdevice"].checked && !input[name="hopeprogram"].checked) {
            alert('문의하시 분류를 선택해주세요');
            closeLoadingWithMask();
            return false;
        }

        if(!agreement.checked) {
            alert('개인정보수집관련 동의 해주세요.');
            closeLoadingWithMask();
            return false;
        }

        if(!agreement.checked) {
            alert('개인정보수집관련 동의 해주세요.');
            closeLoadingWithMask();
            return false;
        }
    });



});