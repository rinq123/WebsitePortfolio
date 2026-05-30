export function initReveal() {
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
}


