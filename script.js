// Utilidades do site Adrelise

// Ano dinâmico no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile (sem interferir no layout desktop)
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Suave ao clicar nos links do menu
document.querySelectorAll('.nav a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const href = a.getAttribute('href');
    const target = document.querySelector(href);
    if (!target) return;
    window.scrollTo({
      top: target.offsetTop - 64,
      behavior: 'smooth'
    });
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Reveal on scroll para .reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('revealed');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Play/Pause do vídeo ao clicar na figura (UX rápido)
const videoFigure = document.querySelector('.video-card video');
if (videoFigure) {
  videoFigure.addEventListener('click', () => {
    if (videoFigure.paused) videoFigure.play();
    else videoFigure.pause();
  });
}
