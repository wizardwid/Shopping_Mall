document.addEventListener("DOMContentLoaded", function() {
    // URL에서 'id' 값 추출
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');  // URL에 파라미터가 있다면

    if (!productId) {
        console.error("Product ID not found in URL");
        return;
    }

    // JSON 데이터를 불러오기
    fetch('shoes.json')
        .then(response => response.json())
        .then(productData => {
            const productDetailElement = document.getElementById("product-detail");
            
            // 데이터 구조 검증
            if (!productData || !productData.products || !Array.isArray(productData.products)) {
                console.error("Invalid product data structure");
                return;
            }

            // 해당 ID의 상품 데이터 찾기
            const product = productData.products.find(product => product.id == productId);
            if (!product) {
                console.error("Product not found");
                return;
            }

            // 상품 데이터에서 HTML 요소를 생성하여 삽입
            const productSection = document.createElement("section");
            productSection.className = "product";  // CSS 클래스 추가

            const divElement = document.createElement("div");
            divElement.className = "product-image";  // 이미지 관련 CSS 클래스

            // 이미지
            if (product.image && product.image.src) {
                const imgElement = document.createElement("img");
                imgElement.src = product.image.src;
                imgElement.alt = product.image.alt || "Product Image";
                divElement.appendChild(imgElement);
            }

            // 상품 세부정보
            const detailsElement = document.createElement("div");
            detailsElement.className = "product-details";  // 상품 세부 정보 CSS 클래스

            if (product.name) {
                const h2Element = document.createElement("h2");
                h2Element.textContent = product.name;
                detailsElement.appendChild(h2Element);
            }

            if (product.price) {
                const priceElement = document.createElement("p");
                priceElement.className = "price";  // 가격 관련 CSS 클래스
                priceElement.textContent = product.price;
                detailsElement.appendChild(priceElement);
            }

            if (product.emphasis) {
                const emphasisElement = document.createElement("p");
                emphasisElement.id = "emphasis";  // 강조 텍스트 스타일 적용
                emphasisElement.textContent = product.emphasis;
                detailsElement.appendChild(emphasisElement);
            }

            if (product.description) {
                const descriptionElement = document.createElement("pre");
                descriptionElement.className = "description";  // 설명 관련 CSS 클래스
                descriptionElement.textContent = product.description;
                detailsElement.appendChild(descriptionElement);
            }

            // 상품 옵션과 구매 버튼
            const formElement = document.createElement("form");
            formElement.method = productData.form.method;
            formElement.action = productData.form.action;

            const selectDiv = document.createElement("div");
            selectDiv.className = productData.form.div.class;
            
            // 색상 옵션 선택
            const colorSelectElement = document.createElement("select");
            colorSelectElement.className = "form-select";
            colorSelectElement.name = "color";
            colorSelectElement.ariaLabel = "색상";

            // 첫 번째 기본 옵션 
            const defaultOption = document.createElement("option");
            defaultOption.textContent = "색상";
            defaultOption.selected = true;
            defaultOption.disabled = true; // 선택 불가 상태
            colorSelectElement.appendChild(defaultOption);

            product.colorOptions.forEach(color => {
                const colorOptionElement = document.createElement("option");
                colorOptionElement.value = color.value;
                colorOptionElement.textContent = color.text;
                colorSelectElement.appendChild(colorOptionElement);
            });

            selectDiv.appendChild(colorSelectElement);

            if (Array.isArray(productData.form.div.select)) {
                productData.form.div.select.forEach(selectData => {
                    const selectElement = document.createElement("select");
                    selectElement.className = selectData.class;
                    selectElement.name = selectData.name;
                    selectElement.ariaLabel = selectData.ariaLabel;

                    if (Array.isArray(selectData.option)) {
                        selectData.option.forEach(optionData => {
                            const optionElement = document.createElement("option");
                            optionElement.value = optionData.value || '';
                            optionElement.selected = optionData.selected || false;
                            optionElement.disabled = optionData.selected || false; // 기본 옵션만 비활성화
                            optionElement.textContent = optionData.text;
                            selectElement.appendChild(optionElement);
                        });
                    }

                    selectDiv.appendChild(selectElement);
                });
            }

            formElement.appendChild(selectDiv);

            // 구매 버튼
            const buttonElement = document.createElement("button");
            buttonElement.type = productData.form.button.type;
            buttonElement.name = productData.form.button.name;
            buttonElement.className = productData.form.button.class;
            buttonElement.textContent = productData.form.button.text;
            formElement.appendChild(buttonElement);

            detailsElement.appendChild(formElement);

            // 장바구니 아이콘 추가
            const cartIconContainer = document.createElement("div");
            cartIconContainer.className = "cart-icon";

            const cartLink = document.createElement("a");
            cartLink.href = "/cart.html";
            cartLink.title = "장바구니로 이동";

            const cartIcon = document.createElement("i");
            cartIcon.className = "fa fa-shopping-cart"; // Font Awesome 클래스 사용

            cartLink.appendChild(cartIcon);
            cartIconContainer.appendChild(cartLink);
            detailsElement.appendChild(cartIconContainer);

            // 모든 요소들을 섹션에 추가
            productSection.appendChild(divElement);  // 이미지 부분 추가
            productSection.appendChild(detailsElement);  // 세부 정보 추가

            // 'product-detail'에 추가
            productDetailElement.appendChild(productSection);
        })
        .catch(error => console.error('Error loading product data:', error));
});
