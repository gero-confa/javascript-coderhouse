const crearTarjetas = () => {
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
};
const removeElements = (elms) => elms.forEach(el => el.remove());


const tienda = document.getElementsByClassName("navegacion");
let filtroCafe = document.getElementById("filtrarCafe");
let filtroCafetera = document.getElementById("filtrarCafetera");
let filtroFiltros = document.getElementById("filtrarFiltros");
let filtroAccesorios = document.getElementById("filtrarAccesorios");
let filtroPrecio1k = document.getElementById("max1k");
let filtroPrecio3k = document.getElementById("max3k");
let filtroPrecio5k = document.getElementById("max5k");
let filtroPrecioMax = document.getElementById("max");
let quitarFiltros = document.getElementById("borrarFiltros");

const buscarProductos = () => {
    let input = document.getElementById('busqueda__barra').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('producto');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "flex";
        }
    }
};

filtroCafe.onclick = (e) => {
    productosMostrados = listaProductos.filter(elemento => elemento.categoria === "cafe");
    removeElements(document.querySelectorAll(".producto"));
    crearTarjetas()
}
filtroCafetera.onclick = () => {
    productosMostrados = listaProductos.filter(elemento => elemento.categoria === "cafetera");
    removeElements(document.querySelectorAll(".producto"));
    crearTarjetas()
};
filtroFiltros.onclick = () => {
    productosMostrados = listaProductos.filter(elemento => elemento.categoria === "filtros");
    removeElements(document.querySelectorAll(".producto"));
    crearTarjetas();
};
filtroAccesorios.onclick = () => {
    productosMostrados = listaProductos.filter(elemento => elemento.categoria === "accesorios");
    removeElements(document.querySelectorAll(".producto"));
    crearTarjetas();
};
filtroPrecio1k.onclick = () => {
    productosMostrados = listaProductos.filter(elemento => elemento.precio < 1000);
    removeElements(document.querySelectorAll(".producto"));
    crearTarjetas();
};
filtroPrecio3k.onclick = () => {
    productosMostrados = listaProductos.filter(elemento => elemento.precio > 1000 && elemento.precio < 3000);
    removeElements(document.querySelectorAll(".producto"));
    crearTarjetas();
};
filtroPrecio5k.onclick = () => {
    productosMostrados = listaProductos.filter(elemento => elemento.precio > 3000 && elemento.precio < 5000);
    removeElements(document.querySelectorAll(".producto"));
    crearTarjetas();
};

filtroPrecioMax.onclick = () => {
    productosMostrados = listaProductos.filter(elemento => elemento.precio > 5000);
    removeElements(document.querySelectorAll(".producto"));
    crearTarjetas();
};

quitarFiltros.onclick = (e) => {
    productosMostrados = listaProductos;
    removeElements(document.querySelectorAll(".producto"));
    crearTarjetas()
};