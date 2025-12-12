document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Toggle navigation menu on hamburger click
    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
        navToggle.classList.toggle('nav-open');
    });

    // Close navigation menu when a link is clicked (for smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
                navToggle.classList.remove('nav-open');
            }
        });
    });
});