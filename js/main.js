if (localStorage.getItem("sesionUsuario" == null)) {
    sesionUsuario = false
} else {
    sesionUsuario = JSON.parse(localStorage.getItem("sesionUsuario"))
}

let productosMostrados = listaProductos




if (productosMostrados.length > 0) {
    let filtroCafe = document.getElementById("filtrarCafe");
let filtroCafetera = document.getElementById("filtrarCafetera");
let filtroFiltros = document.getElementById("filtrarFiltros");
let filtroAccesorios = document.getElementById("filtrarAccesorios");

let filtroPrecio1k = document.getElementById("max1k");
let filtroPrecio3k = document.getElementById("max3k");
let filtroPrecio5k = document.getElementById("max5k");
let filtroPrecioMax = document.getElementById("max");

filtroCafe.onclick = () => { 
  console.log(productosMostrados = listaProductos.filter(elemento => elemento.categoria === "cafe"));
  productosMostrados = listaProductos.filter(elemento => elemento.categoria === "cafe") }
filtroCafetera.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }
filtroFiltros.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }
filtroAccesorios.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }
filtroPrecio1k.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento.precio < 1000) }
filtroPrecio3k.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }
filtroPrecio5k.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }
filtroPrecioMax.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }
    const tienda = document.getElementsByClassName("navegacion");
    for (producto of productosMostrados) {
        let index = productosMostrados.indexOf(producto)
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
        botonTarjeta.setAttribute("onclick", "comprar")
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
    carrito.push(listaProductos[index])

    localStorage.setItem("carrito", JSON.stringify(carrito))
}




