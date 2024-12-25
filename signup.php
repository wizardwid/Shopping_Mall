<?php
include('db_conn.php');  // 데이터베이스 연결

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];  // 이메일
    $birth = $_POST['birth'];  // 생년월일
    $username = $_POST['username'];  // 이름
    $userid = $_POST['id'];  // 아이디
    $passwd = password_hash($_POST['password'], PASSWORD_DEFAULT);  // 비밀번호 암호화
    $agree = isset($_POST['terms']) ? 1 : 0;  // 약관 동의 여부

    // 회원가입 쿼리
    $sql = "INSERT INTO members (email, birth, username, userid, passwd, agree) 
            VALUES ('$email', '$birth', '$username', '$userid', '$passwd', '$agree')";
    
    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('회원가입이 완료되었습니다.'); window.location.href = 'login.html';</script>";
    } else {
        // 쿼리 실행 실패 시 에러 메시지 출력
        echo "<script>alert('회원가입에 실패했습니다.');</script>";
        echo "Error: " . mysqli_error($conn);  // 쿼리 실행 에러 출력
    }
}

mysqli_close($conn);
?>
