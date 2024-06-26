document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // 이전 에러 메시지 초기화
    var errorFields = document.querySelectorAll('.invalid-feedback');
    errorFields.forEach(function(errorField) {
        errorField.style.display = 'none';
    });

    // 폼 값 가져오기
    var email = document.getElementById('email').value.trim();
    var birth = document.getElementById('birth').value.trim();
    var username = document.getElementById('username').value.trim();
    var id = document.getElementById('id').value.trim();
    var password = document.getElementById('password').value.trim();
    var cpassword = document.getElementById('cpassword').value.trim();
    var terms = document.getElementById('terms-check').checked;

    var isValid = true;

    // 이메일 유효성 검사
    if (email === "") {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // 생년월일 유효성 검사
    if (birth === "") {
        document.getElementById('birthError').style.display = 'block';
        isValid = false;
    }

    // 사용자 이름 유효성 검사
    if (username === "") {
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // 아이디 유효성 검사
    if (id === "") {
        document.getElementById('idError').style.display = 'block';
        isValid = false;
    }

    // 비밀번호 유효성 검사
    if (password === "") {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // 비밀번호 확인 유효성 검사
    if (cpassword === "") {
        document.getElementById('cpasswordError').style.display = 'block';
        isValid = false;
    } else if (password !== cpassword) {
        document.getElementById('cpasswordError').innerText = '비밀번호가 일치하지 않습니다.';
        document.getElementById('cpasswordError').style.display = 'block';
        isValid = false;
    }

    // 이용 약관 동의 유효성 검사
    if (!terms) {
        document.getElementById('termsError').style.display = 'block';
        isValid = false;
    }
    
    // 모든 유효성 검사를 통과하면 폼을 제출
    if (isValid) {
        alert("회원가입이 완료되었습니다.");
        // this.submit(); // 폼 제출을 원할 경우 이 줄의 주석을 해제하세요
    }
});
