const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear

const lastModifiedDate = document.lastModified;
document.getElementById("modifiedDate").textContent = lastModifiedDate;

const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById('.menu');

function toggleMenu() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        hamburger.textContent = "☰"; // Hamburger icon
    } else {
        menu.style.display = "block";
        hamburger.textContent = "✖"; // Close (X) icon
    }
}

hamburger.addEventListener("click", toggleMenu);

function Resize() {
    window.addEventListener() {
        if (window.innerWidth > 768) {
            menu.style.display = "flex";
            humburger.style.display = "none";
        } else {
            menu.style.display = "none";
            hamburger.style.display = "block";
            hamburger.textContent = "☰";
        }
    }
    
}