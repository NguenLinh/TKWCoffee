document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");  // Thay đổi từ subtotalEl vì không có phần subtotal hiển thị ở HTML

  // Kiểm tra giỏ hàng
  if (cart.length === 0) {
    container.innerHTML = "<p>Giỏ hàng trống.</p>";
  } else {
    let subtotal = 0;

    // Hiển thị các sản phẩm trong giỏ
    cart.forEach(item => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="info">
          <h4>${item.name}</h4>
          <p>${item.price.toLocaleString("vi-VN")} ₫ × ${item.quantity}</p>
        </div>
        <div class="price">${(item.price * item.quantity).toLocaleString("vi-VN")} ₫</div>
      `;
      container.appendChild(div);

      // Tính subtotal cho giỏ hàng
      subtotal += item.price * item.quantity;
    });

    // Cập nhật tổng tiền
    totalEl.textContent = subtotal.toLocaleString("vi-VN") + " ₫";  
  }

  // Khi nhấn "Đặt hàng"
  document.querySelector(".btn-order").addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }

    alert("Đặt hàng thành công!");

    // Xóa giỏ hàng
    localStorage.removeItem("cart");

    // Quay lại trang chủ
    setTimeout(() => {
      window.location.href = "Trangchu.html";
    }, 2000);
  });
});
