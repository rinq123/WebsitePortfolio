export function initTheme() {
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
}

