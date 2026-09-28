document.querySelectorAll(".question").forEach((question) => {
    question.addEventListener("click", () => {
        question.nextElementSibling.classList.toggle("open");
    });
});
