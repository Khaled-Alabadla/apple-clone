// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Optional: Initialize GSAP interactions if available
    if (typeof gsap !== 'undefined') {
        gsap.from(".hero-title", { duration: 1, y: 30, opacity: 0, ease: "power3.out" });
        gsap.from(".hero-subtitle", { duration: 1, y: 30, opacity: 0, ease: "power3.out", delay: 0.2 });
    }
});
