function loadHeaderAndFooter() {
  document.getElementById('header').innerHTML = `
    <header>
      <nav>
        <div class="nav_col">
          <img src="./Img/Giaodien/logo.png" alt="mooti tea">
          <ul>
            <li><a href="Trangchu.html">TRANG CHỦ</a></li>
            <li><a href="Sanpham.html">MENU</a></li>
            <li><a href="Gioithieu.html">GIỚI THIỆU</a></li>
            <li><a href="Lienhe.html">LIÊN HỆ</a></li>
          </ul>
        </div>

        <div class="icon">
          <a href="Giohang.html" class="cart-icon">
            <i class="fa-solid fa-cart-shopping"></i>
            <span id="cart-count">0</span>
          </a>
          <a href="account.html"><i class="fa-solid fa-user"></i></a>
        </div>
      </nav>
    </header>
  `;

  document.getElementById('footer').innerHTML = `
    <footer>
      <div class="footer-lh">
        <h3>Thông tin liên hệ</h3>
        <p>Địa chỉ: 33 Vĩnh Viễn,<br> quận 10, TP. Hồ Chí Minh</p>
        <p>Điện thoại: 0123 456 789</p>
        <p>Email: mootitea@Shop.com</p>
      </div>

      <div class="icon">
        <h3>Kết nối với Mooti Tea</h3>
        <a href="https://www.facebook.com/mootitea.vn" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="mailto:mootitea@Shop.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://www.tiktok.com/@bmootitea" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
      </div>

      <div class="footer-lh">
        <iframe
          src="https://www.google.com/maps?q=33+Vĩnh+Viễn,+Phường+2,+Quận+10,+TP.+Hồ+Chí+Minh&output=embed"
          frameborder="0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </footer>
  `;

  // Cập nhật giỏ hàng SAU KHI header đã được render
  updateCartCount();
}

// Sửa lỗi window.onload
document.addEventListener("DOMContentLoaded", loadHeaderAndFooter);
