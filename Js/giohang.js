document.addEventListener("DOMContentLoaded", () => {
  renderCart();
});

// 🧩 Hiển thị giỏ hàng
function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const list = document.getElementById("cart-list");
  const totalEl = document.getElementById("cart-total");

  if (cart.length === 0) {
    list.innerHTML = `<p class="empty">Giỏ hàng trống.</p>`;
    totalEl.textContent = "0 ₫";
    return;
  }

  let total = 0;
  list.innerHTML = "";

  cart.forEach((item, index) => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-img">
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p class="price">${item.price.toLocaleString("vi-VN")} ₫</p>
        <div class="quantity">
          <button onclick="changeQty(${index}, -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
      </div>
      <div class="cart-action">
        <p>${itemTotal.toLocaleString("vi-VN")} ₫</p>
        <button class="remove" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    list.appendChild(itemEl);
  });

  totalEl.textContent = total.toLocaleString("vi-VN") + " ₫";
}

// ➕➖ Thay đổi số lượng
function changeQty(index, delta) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// Xóa sản phẩm
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// 🛒 Nút "Mua hàng" → chuyển sang thanh toán
document.getElementById("btn-buy").addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }

  // ✅ Chuyển sang trang thanh toán
  window.location.href = "Thanhtoan.html";
});
