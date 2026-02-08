// Cited by Codex (OpenAI)
// Updated by Codex
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

function toggleMenu() {
  menu.classList.toggle('hide');
  menuButton.classList.toggle('change');
}

menuButton.addEventListener('click', toggleMenu);
