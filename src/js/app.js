const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

const responseDesign = () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    hamburger.classList.toggle("animaty-active");
};
document.addEventListener('DOMContentLoaded', function() {
hamburger.addEventListener("click", responseDesign);
});