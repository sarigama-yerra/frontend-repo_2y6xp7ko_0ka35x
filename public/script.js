// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    // simple icon morph
    menuBtn.innerHTML = isHidden
      ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12"/><path d="M6 18L18 6"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
  });
}

// Smooth scroll for anchor links (native CSS scroll-smooth already set)
[...document.querySelectorAll('a[href^="#"]')].forEach((a) => {
  a.addEventListener('click', () => {
    mobileMenu?.classList.add('hidden');
  });
});

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form mock submit
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending…';
    statusEl.classList.remove('text-emerald-400');
    statusEl.classList.add('text-slate-400');

    // Fake async delay
    await new Promise((r) => setTimeout(r, 900));

    // Example payload
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Contact payload', data);

    statusEl.textContent = 'Thanks! I\'ll get back to you soon.';
    statusEl.classList.remove('text-slate-400');
    statusEl.classList.add('text-emerald-400');
    form.reset();
  });
}
