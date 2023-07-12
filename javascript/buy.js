const verCarrito = () => { 

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-tittle">Carrito</h1>
    `; 
    document.body.classList.add('modal-open');

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h3");
    modalButton.innerHTML = `<img id="button-close" src="../Assets/icon/cruz.png"> `
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () =>{
        modalContainer.style.display = "none";
        document.body.classList.remove('modal-open');
    });

    modalHeader.append(modalButton);


    carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `

    <img src="../Assets/img/${product.img}">
    <h4>${product.name}</h4>
    <p>$ ${product.price}</p>
    <span class="restar"> - </span>
    <p>Cantidad: ${product.quantity}</p>
    <span class="sumar"> + </span>
    <p>Total: $ ${product.quantity * product.price}</p>
    `;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
        if(product.quantity !== 1){
            product.quantity--;
        }
        verCarrito();
        saveLocal();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
        product.quantity++;
        saveLocal();
        verCarrito();
    });


    let eliminar = document.createElement("span");
    eliminar.innerText = "X";
    eliminar.className = "delet-product";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
});

    const total = carrito.reduce((acc, el) => acc + el.price * el.quantity, 0);
    
    const totalPrice = document.createElement("div");
    totalPrice.className = "total-content";
    totalPrice.innerHTML = `total a pagar: $ ${total}`;

    modalContainer.append(totalPrice);

};

buyApple.addEventListener("click", verCarrito);


const eliminarProducto = () => {
    const founId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== founId;
    })
    carritoCounter();
    saveLocal();
    verCarrito();
    };



    const carritoCounter = () => {
        cantidadCarrito.style.display = "block";

        const carritoLenght = carrito.length;

        localStorage.setItem("carritoLength", JSON.stringify(carritoLenght)); 

        cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength")) ;
        saveLocal();
    };

    carritoCounter();


    