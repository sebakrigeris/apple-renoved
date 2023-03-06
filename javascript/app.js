const contenedor = document.getElementById("containerProduct");
const buyApple =  document.getElementById("buy-apple");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


productos.forEach((item) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img class="content-img" src="../Assets/img/${item.img}">
    <h3 class="content-h3">${item.store}</h3>
    <h4 class="content-h4"><i class="fa-solid fa-mobile-screen"></i> ${item.name}</h4>
    <p class="content-price"><i class="fa-solid fa-tag"></i> $${item.price}</p>
    <p class="content-text"><i class="fa-regular fa-credit-card"></i> ${item.text}</p>
    
    `;

    contenedor.append(content);

    let buttonComprar = document.createElement("button");
    buttonComprar.className = "comprar"
    buttonComprar.innerText = "comprar"
    content.append(buttonComprar)

    buttonComprar.addEventListener("click", ()=> {
    const repeat = carrito.some((repeatId) => repeatId.id === item.id);

    if(repeat){
        carrito.map((prod) =>{
            if(prod.id === item.id) {
                prod.quantity++;
        }
        });
        
    } else {
    
    carrito.push({
        id: item.id,
        img: item.img,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        });
        carritoCounter();
        saveLocal();
        }
    });
});

/*set item local storage */

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

/*get item local storage */