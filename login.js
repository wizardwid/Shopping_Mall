document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // 이전 에러 메시지 초기화
    var errorFields = document.querySelectorAll('.invalid-feedback');
    errorFields.forEach(function(errorField) {
        errorField.style.display = 'none';
    });

    // 폼 값 가져오기
    var uid = document.getElementById('uid').value.trim();
    var upass = document.getElementById('upass').value.trim();

    var isValid = true;

    // 아이디 유효성 검사
    if (uid === "") {
        document.getElementById('uidError').style.display = 'block';
        isValid = false;
    }

    // 비밀번호 유효성 검사
    if (upass === "") {
        document.getElementById('upassError').style.display = 'block';
        isValid = false;
    }

    // 모든 유효성 검사를 통과하면 폼을 제출
    if (isValid) {
        alert("로그인 되었습니다.");
        // this.submit(); // 폼 제출을 원할 경우 이 줄의 주석을 해제하세요
    }
});