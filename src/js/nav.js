export function initNav() {
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
}
