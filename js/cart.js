let carrito;
let btn = document.getElementById("finalizarCompra")
if (localStorage.getItem("carrito") == null) {
    carrito = []
} else {
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

const finalizarCompra = () => {
    totalCompra = 0
    carrito.forEach(element => {
        let valorSumar = Number(element.precio)
        totalCompra += valorSumar
    });
    alert(`Tu total es de ${totalCompra}`)
}

btn.addEventListener("click", () => {
    finalizarCompra()
})


if (carrito.length > 0) {
    const tienda = document.getElementById("miTienda");
    for (producto of carrito) {
        let contenido = document.createElement("div");
        contenido.innerHTML = `<div class="producto">
    <h3 class="producto__nombre">${producto.nombre}</h3>
    <h4 class="producto__precio">${producto.precio}</h4>
</div>`
        tienda.appendChild(contenido)
    }
}