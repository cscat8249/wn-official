function chkword(obj, maxByte) {
 
    var strValue = obj.value;
    var strLen = strValue.length;
    var totalByte = 0;
    var len = 0;
    var oneChar = "";
    var str2 = "";

    for (var i = 0; i < strLen; i++) {
        oneChar = strValue.charAt(i);
        if (escape(oneChar).length > 4) {
            totalByte += 2;
        } else {
            totalByte++;
        }

        // 입력한 문자 길이보다 넘치면 잘라내기 위해 저장
        if (totalByte <= maxByte) {
            len = i + 1;
        }
    }

    // 넘어가는 글자는 자른다.
    if (totalByte > maxByte) {
        alert(maxByte + "자를 초과 입력 할 수 없습니다.");
        str2 = strValue.substr(0, len);
        obj.value = str2;
        chkword(obj, 4000);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let fullname = document.querySelector('#fullname');
    let telnumber1 = document.querySelector('#telnumber1');
    let telnumber2 = document.querySelector('#telnumber2');
    let telnumber3 = document.querySelector('#telnumber3');
    let hopearea = document.querySelector('#hopearea');
    let estimate = document.querySelector('#estimate');
    let etc = document.querySelector('#etc');
    let agreement = document.querySelector('#agreement');
    let form_submit = document.querySelector('#form_submit');

    
    form_submit.addEventListener('click',function(e){
        e.preventDefault();
        if(fullname.value.length === 0) {
            alert('이름을 입력하세요.');
            fullname.focus();
            return false;
        }
        if(telnumber1.value.length === 0 || telnumber2.value.length === 0 || telnumber3.value.length === 0){
            alert('휴대폰 번호를 입력하세요.');
            telnumber1.focus();
            return false;
        }
        if(hopearea.value.length === 0) {
            alert('희망개설지역을 입력하세요.');
            hopearea.focus();
            return false;
        }
        if(estimate.value.length === 0) {
            alert('창업예상견적을 입력하세요.');
            estimate.focus();
            return false;
        }
        if(!agreement.checked) {
            alert('개인정보수집관련 동의 해주세요.');
            return false;
        }
        var templateParams = {
            name: fullname.value,
            telnumber1 : telnumber1.value,
            telnumber2 : telnumber2.value,
            telnumber3 : telnumber3.value,
            hopearea : hopearea.value,
            estimate : estimate.value,
            desc : etc.value,
        };

        emailjs.init("user_xeNiLGf0KtGdgplHVTXMr");
        emailjs.send('service_tfbhvt1', 'template_1ypktmh', templateParams)
         //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("성공적으로 가맹문의를 신청 하였습니다.");
            fullname.value = null;
            telnumber1.value = null;
            telnumber2.value = null;
            telnumber3.value = null;
            hopearea.value = null;
            estimate.value = null;
            etc.value = null;
        }, function(error) {
            console.log('FAILED...', error);
            alert("가맹문의 신청이 안되었습니다. 한번더 다시 부탁드립니다.");
        });

        
    });
});