<?php
session_start();
include('db_conn.php');  // 데이터베이스 연결

// JSON 파일 읽기
$jsonData = file_get_contents('accessorie.json');
$products = json_decode($jsonData, true);

foreach ($products['products'] as $product) {
    $name = mysqli_real_escape_string($conn, $product['name']);
    $price = mysqli_real_escape_string($conn, $product['price']);
    $emphasis = mysqli_real_escape_string($conn, $product['emphasis']);
    $description = mysqli_real_escape_string($conn, $product['description']);

    // 이미지가 비어있으면 빈 배열로 처리
    $images = isset($product['image']) && !empty($product['image']) ? json_encode($product['image']) : '[]';
    
    // 색상 옵션 처리
    $color = isset($product['colorOptions']) && !empty($product['colorOptions']) ? json_encode($product['colorOptions']) : '[]';
    
    // 사이즈 옵션 처리 (form에서 사이즈 옵션을 가져옴)
    $size = isset($products['form']['div']['select'][0]['option']) ? json_encode($products['form']['div']['select'][0]['option']) : '[]';
    
    // 수량 옵션 처리 (form에서 수량 옵션을 가져옴)
    $count = isset($products['form']['div']['select'][1]['option']) ? json_encode($products['form']['div']['select'][1]['option']) : '[]';

    // SQL 쿼리
    $sql = "
        INSERT INTO products (name, price, emphasis, description, images, color, size, count) 
        VALUES ('$name', '$price', '$emphasis', '$description', '$images', '$color', '$size', '$count')
    ";

    // 쿼리 실행 및 결과 출력
    if (mysqli_query($conn, $sql)) {
        echo "상품 '$name' 삽입 성공!<br>";
    } else {
        echo "상품 삽입 실패: " . mysqli_error($conn) . "<br>";
    }
}

mysqli_close($conn);
?>
