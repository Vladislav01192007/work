// Зменшення логотипа при скролі
const logo = document.getElementById('heroLogo');
const START_SCALE = 1.0;
const END_SCALE = 0.35;
const SCROLL_RANGE = 400;

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

function onScroll() {
  const t = clamp(window.scrollY / SCROLL_RANGE, 0, 1);
  const scale = START_SCALE + (END_SCALE - START_SCALE) * t;
  const translateY = -20 * t;
  logo.style.transform = `translateY(${translateY}px) scale(${scale})`;
  if (t > 0.02) logo.classList.add('scrolled');
  else logo.classList.remove('scrolled');

  // Появлення секцій при скролі
  document.querySelectorAll('main .feature, main .intro').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', () => {
  onScroll();
});

// Перемикач фонового градієнта
const bgToggle = document.getElementById('bgToggle');
let flipped = false;
bgToggle.addEventListener('click', () => {
  flipped = !flipped;
  document.documentElement.style.setProperty('--angle', flipped ? '315deg' : '135deg');
});

// Одразу позначити видимими ті секції, що вже на екрані
window.addEventListener('DOMContentLoaded', () => {
  onScroll();
}); 
// === PRELOADER ===
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      mainContent.style.opacity = "1";
      mainContent.style.visibility = "visible";
    }, 800);
  }, 1000); // 1 секунда перед зникненням
});

const sidePanel = document.getElementById('sidePanel');
const openPanel = document.getElementById('openPanel');
const closePanel = document.getElementById('closePanel');

openPanel.addEventListener('click', () => {
  sidePanel.classList.add('active');
});

closePanel.addEventListener('click', () => {
  sidePanel.classList.remove('active');
});




