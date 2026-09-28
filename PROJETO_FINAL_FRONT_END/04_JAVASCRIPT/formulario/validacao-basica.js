const form = document.querySelector("form");

form?.addEventListener("submit", (event) => {
    const email = form.querySelector('input[type="email"]');

    if (!email?.value) {
        event.preventDefault();
        alert("Preencha o e-mail.");
    }
});
