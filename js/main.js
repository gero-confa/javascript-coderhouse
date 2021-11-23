let productosMostrados = listaProductos

if (productosMostrados.length > 0) {
    const tienda = document.getElementsByClassName("navegacion");
    for (producto of productosMostrados) {
        let index = productosMostrados.indexOf(producto);
        const contenido = document.createElement("div");
        contenido.setAttribute("class", "producto");

        const nombreTarjeta = document.createElement("h3");

        nombreTarjeta.textContent = `${producto.nombre}`;
        nombreTarjeta.setAttribute("class", "producto__nombre")
        contenido.appendChild(nombreTarjeta)

        const precioTarjeta = document.createElement("h4");
        precioTarjeta.textContent = `${producto.precio}`;
        precioTarjeta.setAttribute("class", "producto__precio")
        contenido.appendChild(precioTarjeta)

        const botonTarjeta = document.createElement("button");
        botonTarjeta.textContent = `Comprar`;
        botonTarjeta.setAttribute("class", "producto__comprar")
        botonTarjeta.setAttribute("onclick", `comprar(${index})`)
        contenido.appendChild(botonTarjeta)

        tienda[0].appendChild(contenido)
    }
}


let carrito;

if (localStorage.getItem("carrito") == null) {
    carrito = []
} else {
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

const comprar = (index) => {
    carrito.push(productosMostrados[index])

    localStorage.setItem("carrito", JSON.stringify(carrito))
}




