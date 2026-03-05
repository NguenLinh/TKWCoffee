document.addEventListener("DOMContentLoaded", () => {

  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // ================= ĐĂNG KÝ =================
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value.trim();
      const rePassword = document.getElementById("regRePassword").value.trim();

      let users = JSON.parse(localStorage.getItem("users")) || [];

      // Email trùng
      if (users.some(u => u.email === email)) {
        alert("Email đã tồn tại!");
        return;
      }

      // Mật khẩu không khớp
      if (password !== rePassword) {
        alert("Mật khẩu nhập lại không khớp!");
        return;
      }

      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      alert("Đăng ký thành công!");
      window.location.href = "Dangnhap.html";
    });
  }

  // ================= ĐĂNG NHẬP =================
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();

      let users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        alert("Email hoặc mật khẩu không đúng!");
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Đăng nhập thành công!");

      window.location.href = "Trangchu.html";
    });
  }

  // ================ HIỂN THỊ TÊN Ở ACCOUNT.HTML =================
  if (window.location.pathname.includes("account.html")) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      window.location.href = "Dangnhap.html";
      return;
    }

    document.getElementById("welcomeMsg").textContent =
      `Xin chào, ${currentUser.name}!`;
  }

});

// ================= ĐĂNG XUẤT =================
function logout() {
  localStorage.removeItem("currentUser");
  alert("Đăng xuất thành công!");
  window.location.href = "Dangnhap.html";
}
