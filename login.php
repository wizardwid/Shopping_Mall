<?php
session_start();
include('db_conn.php');  // 데이터베이스 연결

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $userid = $_POST['uid'];  // 아이디
    $passwd = $_POST['upass'];  // 비밀번호

    // 사용자 정보 조회
    $sql = "SELECT * FROM members WHERE userid = '$userid'";
    $result = mysqli_query($conn, $sql);
    $user = mysqli_fetch_assoc($result);

    // 비밀번호 검증
    if ($user && password_verify($passwd, $user['passwd'])) { // 사용자가 존재하고 비밀번호 비교
        $_SESSION['userid'] = $user['userid'];  // 세션에 로그인 정보 저장
        $_SESSION['user_id'] = $user['id'];  // 사용자 id를 세션에 저장
        header("Location: index.html");  // 로그인 후 index.html로 리다이렉트
        exit();  // 코드 실행 중단
    } else {
        echo "<script>alert('아이디 또는 비밀번호가 틀렸습니다.');</script>";
    }
}

mysqli_close($conn);
?>
