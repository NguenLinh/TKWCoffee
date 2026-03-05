
document.addEventListener("DOMContentLoaded", () => {

  const products = [
    { id: 1, name: "Matcha Latte", price: 25000, image: "./img/matchalatte.png", category: "trà sữa" },
    { id: 2, name: "Trà sữa Thái xanh", price: 28000, image: "./img/trasuathaixanh.png", category: "trà sữa" },
    { id: 3, name: "Trà sữa Matcha", price: 25000, image: "./img/trasuamatcha.png", category: "trà sữa" },
    { id: 4, name: "Cà phê đá", price: 15000, image: "./img/capheda.png", category: "cà phê" },
    { id: 5, name: "Cà phê sữa", price: 15000, image: "./img/caphesua.png", category: "cà phê" },
    { id: 6, name: "Bạc xỉu", price: 18000, image: "./img/bacxiu.png", category: "cà phê" },
    { id: 7, name: "Cà phê muối", price: 18000, image: "./img/caphemuoi.png", category: "cà phê" },
    { id: 8, name: "Trà sữa Ô long", price: 23000, image: "./img/traolong.png", category: "trà sữa" },
    { id: 9, name: "Trà sữa Socola", price: 25000, image: "./img/trasuasocola.png", category: "trà sữa" },
    { id: 10, name: "Trà Ô long Việt quốc", price: 28000, image: "./img/traolongvietquoc.png", category: "trà" },
    { id: 11, name: "Trà sữa Dâu", price: 25000, image: "./img/trasuadau.png", category: "trà sữa" },
    { id: 12, name: "Trà đào", price: 20000, image: "./img/tradao.png", category: "trà" },
    { id: 13, name: "Trà vải", price: 20000, image: "./img/travai.png", category: "trà" },
    { id: 14, name: "Trà đào cam sả", price: 25000, image: "./img/tradaocamsa.png", category: "trà" },
    { id: 15, name: "Trà mãng cầu", price: 25000, image: "./img/tramancau.png", category: "trà" },
    { id: 16, name: "Trà dâu", price: 25000, image: "./img/tradau.png", category: "trà" },
    { id: 17, name: "Trà chanh hoa đậu biếc", price: 20000, image: "./img/trachanhdaubiec.png", category: "trà" },
    { id: 18, name: "Đá xay Matcha", price: 25000, image: "./img/daxaymatcha.png", category: "đá xay" },
    { id: 19, name: "Đá xay Việt quốc", price: 25000, image: "./img/daxayvietquoc.png", category: "đá xay" },
    { id: 20, name: "Đá xay Socola", price: 25000, image: "./img/socoladaxay.png", category: "đá xay" },
  ];

  localStorage.setItem("productsData", JSON.stringify(products));
  renderProducts(products);
  updateCartCount();
});


// RENDER SẢN PHẨM
function renderProducts(list) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-item";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">${p.price.toLocaleString("vi-VN")} ₫</p>
      <div class="btn-group">
        <button class="btn-add" onclick="addToCart(${p.id})">
          <i class="fa-solid fa-cart-plus"></i> Thêm
        </button>
        <button class="btn-buy" onclick="buyNow(${p.id})">
          Mua ngay
        </button>
      </div>
    `;
    productList.appendChild(card);
  });
}


// LỌC THEO DANH MỤC
function filterByCategory(type) {
  const products = JSON.parse(localStorage.getItem("productsData")) || [];
  const filtered = products.filter(p => p.category.includes(type));
  renderProducts(filtered);
}

function resetFilter() {
  const products = JSON.parse(localStorage.getItem("productsData")) || [];
  renderProducts(products);
}


// GIỎ HÀNG
function addToCart(id) {
  const products = JSON.parse(localStorage.getItem("productsData")) || [];
  const product = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast(`Đã thêm "${product.name}" vào giỏ!`);
}


// MUA NGAY
function buyNow(id) {
  const products = JSON.parse(localStorage.getItem("productsData")) || [];
  const product = products.find(p => p.id === id);

  localStorage.setItem("cart", JSON.stringify([{ ...product, quantity: 1 }]));
  updateCartCount();

  window.location.href = "Thanhtoan.html";
}


// SỐ LƯỢNG GIỎ HÀNG
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  const el = document.getElementById("cart-count");
  if (el) el.textContent = count;
}


// TOAST MESSAGE
function showToast(msg) {
  const old = document.querySelector(".toast-msg");
  if (old) old.remove();

  const t = document.createElement("div");
  t.className = "toast-msg";
  t.textContent = msg;
  document.body.appendChild(t);

  setTimeout(() => t.classList.add("show"), 50);
  setTimeout(() => t.remove(), 3000);
}
