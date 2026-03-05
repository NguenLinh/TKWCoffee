document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;
  const slider = document.querySelector(".slider");

  // --- Hàm di chuyển slide ---
  window.moveSlide = function(step) {
    index = (index + step + totalSlides) % totalSlides;
    const slideWidth = slider.clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
  };

  // --- TỰ ĐỘNG CHUYỂN ẢNH MỖI 3 GIÂY ---
  let autoSlide = setInterval(() => moveSlide(1), 3000);

  // --- Khi người dùng bấm nút, dừng tạm rồi chạy lại ---
  document.querySelector(".prev").addEventListener("click", () => {
    clearInterval(autoSlide);
    moveSlide(-1);
    autoSlide = setInterval(() => moveSlide(1), 4000);
  });

  document.querySelector(".next").addEventListener("click", () => {
    clearInterval(autoSlide);
    moveSlide(1);
    autoSlide = setInterval(() => moveSlide(1), 4000);
  });

  // --- Cập nhật lại vị trí nếu thay đổi kích thước màn hình ---
  window.addEventListener("resize", () => {
    const slideWidth = slider.clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
  });
});
