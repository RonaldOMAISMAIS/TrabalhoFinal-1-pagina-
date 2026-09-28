const button = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-links");

button.addEventListener("click", () => {
    menu.classList.toggle("is-open");
});
