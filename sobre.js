const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// ====== CARROSSEL ======
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;

function updateSlide() {
  const width = slides[0].clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

// Troca automática
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlide();
}, 4000);

window.addEventListener('resize', updateSlide);
