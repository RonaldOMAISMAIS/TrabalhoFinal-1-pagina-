const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");

openButton?.addEventListener("click", () => modal?.classList.add("open"));
closeButton?.addEventListener("click", () => modal?.classList.remove("open"));
