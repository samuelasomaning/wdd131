const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear

const lastModifiedDate = document.lastModified;
document.getElementById("modifiedDate").textContent = lastModifiedDate;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector('.menu');

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    if (navMenu.classList.contains("show")) {
        hamburger.textContent = "✕"; 
    } else {
        hamburger.textContent = "☰";
    }
});
