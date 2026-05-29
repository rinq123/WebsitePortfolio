

document.addEventListener('DOMContentLoaded', () => {
  /* NAV MENU TOGGLE */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('nav-links');
  function toggleMenu() {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));  // Modified: correct aria flag
    navLinks.classList.toggle('active');
  }

  hamburger.addEventListener('click', toggleMenu);
  hamburger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    } else if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });


  /* LOCAL STORAGE + DARK MODE */
  const toggleBtn = document.getElementById('dark-mode-toggle');
  const body = document.body;
  const storageKey = 'theme';

  // 1. Apply stored preference or system default
  const savedTheme = localStorage.getItem(storageKey);
  if (
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    body.classList.add('dark-mode');
  }

  // Added: set initial button text
  toggleBtn.textContent = body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';

  // 2. Click toggles dark & writes to storage
  toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem(storageKey, isDark ? 'dark' : 'light');

    // Added: update button label on click
    toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  });

  // 3. Listen for OS preference changes (only if user hasn’t picked)
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', e => {
    if (!localStorage.getItem(storageKey)) {
      body.classList.toggle('dark-mode', e.matches);

      // Added: update label when OS theme flips
      toggleBtn.textContent = e.matches ? 'Light Mode' : 'Dark Mode';
    }
  });

  /* SUBTLE SCROLL REVEALS */
  const revealTargets = document.querySelectorAll(
    '.hero, section, .card, .cv-btn, .cv-secondary-links a, .skills-list li, .contact-links a'
  );

  revealTargets.forEach(el => {
    el.classList.add('reveal');
    el.classList.add('reveal-pending');
  });

  const setRevealDelay = (selector, stepMs) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.style.setProperty('--reveal-delay', `${index * stepMs}ms`);
    });
  };

  setRevealDelay('.card', 70);
  setRevealDelay('.skills-list li', 35);
  setRevealDelay('.contact-links a', 60);

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(el => {
      el.classList.add('is-visible');
      el.classList.remove('reveal-pending');
    });
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      entry.target.classList.remove('reveal-pending');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px 0px 0px'
  });

  const inViewCutoff = window.innerHeight * 0.9;
  revealTargets.forEach(el => {
    if (el.getBoundingClientRect().top <= inViewCutoff) {
      el.classList.add('is-visible');
      el.classList.remove('reveal-pending');
      return;
    }
    revealObserver.observe(el);
  });
});
