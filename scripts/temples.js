const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear

const lastModifiedDate = document.lastModified;
document.getElementById("modifiedDate").textContent = lastModifiedDate;

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamburger.textContent = '☰'; // Hamburger icon
    } else {
        menu.style.display = 'block';
        hamburger.textContent = '✖'; // Close (X) icon
    }
});

window.addEventListener('load', () => {
    if (window.innerWidth < 768) {
        menu.style.display = 'none';
    }
});
