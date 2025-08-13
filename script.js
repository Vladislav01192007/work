/* ===== Зменшення лого при скролі =====
   Лого масштабується від 1.0 (на старті) до 0.35 (після ~400px скролу)
*/
const logo = document.getElementById('heroLogo');
const hero = document.getElementById('hero');

const START_SCALE = 1.0;
const END_SCALE = 0.35;
const SCROLL_RANGE = 400; // px

function clamp(n, min, max){ return Math.min(Math.max(n, min), max); }

function onScroll(){
  const y = window.scrollY;
  const t = clamp(y / SCROLL_RANGE, 0, 1);        // 0..1
  const scale = START_SCALE + (END_SCALE - START_SCALE) * t;
  const translateY = -20 * t;                     // легке підняття при зменшенні

  logo.style.transform = `translateY(${translateY}px) scale(${scale})`;
  if (t > 0.02) logo.classList.add('scrolled');
  else logo.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ===== Перемикач напрямку градієнта (ті самі 2 кольори) ===== */
const bgToggle = document.getElementById('bgToggle');
let flipped = false;
bgToggle.addEventListener('click', () => {
  flipped = !flipped;
  // міняємо тільки кут: 135° <-> 315°
  document.documentElement.style.setProperty('--angle', flipped ? '315deg' : '135deg');

  // невелика мікроанімація кнопки
  bgToggle.classList.toggle('active');
});
