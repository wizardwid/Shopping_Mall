document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('payment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // 이전 에러 메시지 초기화
        var errorFields = document.querySelectorAll('.invalid-feedback');
        errorFields.forEach(function(errorField) {
            errorField.style.display = 'block';
        });

        // 폼 값 가져오기
        var name = document.getElementById('name').value.trim();
        var cardof = document.getElementById('cardof').value;
        var cnumber = document.getElementById('cnumber').value.trim();
        var edate = document.getElementById('edate').value.trim();
        var cvv = document.getElementById('cvv').value.trim();

        var isValid = true;

        // 이름 유효성 검사
        if (name === "") {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }

        // 카드사 선택 유효성 검사
        if (cardof === "카드사" || cardof === "") {
            document.getElementById('cardofError').style.display = 'block';
            isValid = false;
        }

        // 카드 번호 유효성 검사
        if (cnumber === "") {
            document.getElementById('cnumberError').style.display = 'block';
            isValid = false;
        }

        // 만료일 유효성 검사
        if (edate === "") {
            document.getElementById('edateError').style.display = 'block';
            isValid = false;
        }

        // CVV 유효성 검사
        if (cvv === "") {
            document.getElementById('cvvError').style.display = 'block';
            isValid = false;
        }

        // 모든 유효성 검사를 통과하면 폼을 제출
        if (isValid) {
            alert("결제되었습니다.");
            // this.submit();  // 폼 제출을 원할 경우 이 줄의 주석을 해제
        }
    });
});
