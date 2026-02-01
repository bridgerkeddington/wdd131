// Updated by Codex (GPT-5)
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const gallery = document.querySelector('.gallery');

function syncMenuWithWidth() {
  if (!navMenu) {
    return;
  }

  if (window.innerWidth >= 1000) {
    navMenu.classList.add('active');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'true');
    }
  } else {
    navMenu.classList.remove('active');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  }
}

function viewerTemplate(imageUrl, altText) {
  return `
    <div class="viewer" role="dialog" aria-modal="true">
      <button class="viewer-close" type="button" aria-label="Close image viewer">X</button>
      <img src="${imageUrl}" alt="${altText}">
    </div>
  `;
}

function openViewer(imageUrl, altText) {
  if (!imageUrl) {
    return;
  }

  const existingViewer = document.querySelector('.viewer');
  if (existingViewer) {
    existingViewer.remove();
  }

  document.body.insertAdjacentHTML('beforeend', viewerTemplate(imageUrl, altText));
  document.body.classList.add('no-scroll');
}

function closeViewer() {
  const viewer = document.querySelector('.viewer');
  if (viewer) {
    viewer.remove();
  }
  document.body.classList.remove('no-scroll');
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.setAttribute(
      'aria-expanded',
      navMenu.classList.contains('active') ? 'true' : 'false'
    );
  });
}

if (gallery) {
  gallery.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement)) {
      return;
    }

    const fullImage = target.dataset.full || target.src.replace('-sm', '-lg');
    openViewer(fullImage, target.alt);
  });
}

document.addEventListener('click', (event) => {
  const viewer = document.querySelector('.viewer');
  if (!viewer) {
    return;
  }

  const target = event.target;
  if (target instanceof HTMLElement && target.classList.contains('viewer')) {
    closeViewer();
  }

  if (target instanceof HTMLElement && target.classList.contains('viewer-close')) {
    closeViewer();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeViewer();
  }
});

window.addEventListener('resize', syncMenuWithWidth);
window.addEventListener('DOMContentLoaded', syncMenuWithWidth);


