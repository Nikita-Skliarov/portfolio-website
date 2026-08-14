// Content is visible by default; this class opts in to the hidden reveal state,
// so a JS failure can never leave the page blank.
document.documentElement.classList.add('js');

// Scroll-reveal: fade sections in as they enter the viewport.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
}

document.getElementById('year').textContent = new Date().getFullYear();

// Vercel Web Analytics init stub (the queue for /_vercel/insights/script.js,
// which index.html loads deferred). Lives here because the CSP bans inline scripts.
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };

// CTA click events, so the next iteration of this page can argue from data.
document.querySelectorAll('[data-track]').forEach((el) => {
  el.addEventListener('click', () => {
    window.va('event', { name: el.dataset.track });
  });
});
