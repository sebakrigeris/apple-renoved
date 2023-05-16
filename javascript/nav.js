const ul = document.querySelector(".ul-nav");
const abrirMenu = document.querySelector(".abrir-menu");
const cerrarMenu = document.querySelector(".cerrar-menu");

abrirMenu.addEventListener("click", () => {
    ul.classList.add("visible");
});

cerrarMenu.addEventListener("click", () => {
    ul.classList.remove("visible");
});