const button = document.querySelector("#buscar");
const resultado = document.querySelector("#resultado");

button.addEventListener("click", async () => {
    resultado.textContent = "Carregando...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        resultado.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        resultado.textContent = "Não foi possível carregar os dados.";
        console.error(error);
    }
});
