function addToCartFromElement(element) {
    var product = element.closest('.product');
    var title = product.querySelector('.product-title').innerText;
    var price = product.querySelector('.product-price').innerText;
    var imgSrc = product.getElementsByTagName('img')[0].src
    addToCart(title, price, imgSrc);
}
function addToCart(productTitle, productPrice, imgSrc) {
    var cartItems = document.querySelector('.cart-items');
    var cartRow = document.createElement('div');
    var cartRowContents = `
        <div class="cart-item">
            <img src="${imgSrc}" alt="Product Image" width="100" height="100"> <!-- Hiển thị ảnh -->
            <span class="cart-item-title" padding>${productTitle}</span>
            <span class="cart-price">${productPrice}</span>
            <button onclick="removeFromCart(this)" class="remove-item">Xóa</button>
        </div>
    `;
    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow);
    updateCartTotal();
}

function updateCartTotal() {
    var total = 0;
    document.querySelectorAll('.cart-price').forEach(priceElement => {
        total += parseFloat(priceElement.textContent.replace('$', ''));
    });
    document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);
}

function removeFromCart(button) {
    button.parentElement.remove();
    updateCartTotal();
}
// Hàm hiển thị giỏ hàng
function showCart() {
    var cart = document.getElementById('shoppingCart');
    cart.style.display = 'block';
  }
  
  // Hàm ẩn giỏ hàng
  function hideCart() {
    var cart = document.getElementById('shoppingCart');
    cart.style.display = 'none';
  }
  
  // Lấy nút giỏ hàng và phần tử giỏ hàng
  var cartButton = document.getElementById('cartButton');
  var cart = document.getElementById('shoppingCart');
  
  // Thêm sự kiện mouseenter vào nút giỏ hàng để hiện giỏ hàng khi di chuột qua
  cartButton.addEventListener('mouseenter', showCart);
  
  // Thêm sự kiện mouseleave vào phần tử giỏ hàng để ẩn giỏ hàng khi chuột rời đi
  cart.addEventListener('mouseleave', hideCart);
  
