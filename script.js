const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn?.addEventListener('click', () => {
  const shown = mobileNav.style.display === 'block';
  mobileNav.style.display = shown ? 'none' : 'block';
  mobileNav.setAttribute('aria-hidden', shown ? 'true' : 'false');
});

// Hero image switching
const frameImg = document.querySelector('.media-frame img');
const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(btn => {
  btn.addEventListener('click', () => {
    thumbs.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const src = btn.getAttribute('data-src');
    if (src && frameImg) frameImg.setAttribute('src', src);
  });
});
