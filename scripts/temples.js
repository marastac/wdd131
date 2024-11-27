// Update the copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Update the last modified date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu functionality
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navLinks = document.querySelector('nav a');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburgerBtn.classList.toggle('open');
});