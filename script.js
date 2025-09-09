document.querySelector(".download-btn").addEventListener("click", function() {
    window.print(); // Trigger the print dialog
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
