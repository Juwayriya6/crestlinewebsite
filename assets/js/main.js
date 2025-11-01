// Mobile nav
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Popup logic
const openers = document.querySelectorAll('.open-quote');
const popup = document.getElementById('quote-popup');
const closer = popup ? popup.querySelector('.close') : null;

openers.forEach(btn => btn.addEventListener('click', e => {
  e.preventDefault();
  if (popup) popup.style.display = 'flex';
}));

if (closer) closer.addEventListener('click', () => popup.style.display = 'none');
window.addEventListener('click', e => {
  if (e.target === popup) popup.style.display = 'none';
});

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
