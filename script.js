/* Зменшення лого при скролі */
const logo = document.getElementById('heroLogo');

const START_SCALE = 1.0;
const END_SCALE   = 0.35;
const SCROLL_RANGE = 400; // px

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

function onScroll(){
  const t = clamp(window.scrollY / SCROLL_RANGE, 0, 1); // 0..1
  const scale = START_SCALE + (END_SCALE - START_SCALE) * t;
  const translateY = -20 * t;
  logo.style.transform = `translateY(${translateY}px) scale(${scale})`;
  if (t > 0.02) logo.classList.add('scrolled'); else logo.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Перемикач напрямку того ж двокольорового градієнта */
const bgToggle = document.getElementById('bgToggle');
let flipped = false;
bgToggle.addEventListener('click', () => {
  flipped = !flipped;
  document.documentElement.style.setProperty('--angle', flipped ? '315deg' : '135deg');
});
