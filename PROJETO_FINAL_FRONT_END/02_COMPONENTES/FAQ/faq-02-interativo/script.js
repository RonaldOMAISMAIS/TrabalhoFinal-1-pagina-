document.querySelectorAll(".question").forEach((button) => {button.addEventListener("click", () => {button.nextElementSibling.classList.toggle("open");});});
