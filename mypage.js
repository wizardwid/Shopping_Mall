// 수정 폼을 토글하는 함수
function toggleEditForm() {
    const form = document.getElementById('editForm');
    const isFormVisible = form.style.display === 'flex';
    form.style.display = isFormVisible ? 'none' : 'flex';
    
    // 폼이 나타날 때, 기존 정보를 입력 필드에 채워넣음
    if (!isFormVisible) {
        document.getElementById('editName').value = document.getElementById('userName').innerText;
        document.getElementById('editHeight').value = document.getElementById('userHeight').innerText.replace(' cm', '');
        document.getElementById('editWeight').value = document.getElementById('userWeight').innerText.replace(' kg', '');
    }
}

// 이미지 미리보기를 위한 함수
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.getElementById('profileImg');
        output.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    }
}

// 프로필 정보를 저장하는 함수
function saveProfile() {
    // 입력된 값을 가져옴
    const newName = document.getElementById('editName').value;
    const newHeight = document.getElementById('editHeight').value;
    const newWeight = document.getElementById('editWeight').value;

    // 가져온 값으로 기존 정보를 업데이트
    document.getElementById('userName').innerText = newName;
    document.getElementById('userHeight').innerText = `${newHeight} cm`;
    document.getElementById('userWeight').innerText = `${newWeight} kg`;

    // 수정 폼을 숨김
    document.getElementById('editForm').style.display = 'none';
}