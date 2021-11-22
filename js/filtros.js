let filtroCafe = document.getElementById("filtrarCafe");
let filtroCafetera = document.getElementById("filtrarCafetera");
let filtroFiltros = document.getElementById("filtrarFiltros");
let filtroAccesorios = document.getElementById("filtrarAccesorios");

let filtroPrecio1k = document.getElementById("max1k");
let filtroPrecio3k = document.getElementById("max3k");
let filtroPrecio5k = document.getElementById("max5k");
let filtroPrecioMax = document.getElementById("max");

filtroCafe.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento.categoria === "cafe") }
filtroCafetera.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }
filtroFiltros.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }
filtroAccesorios.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }
filtroPrecio1k.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento.precio < 1000) }
filtroPrecio3k.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }
filtroPrecio5k.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }
filtroPrecioMax.onclick = () => { productosMostrados = listaProductos.filter(elemento => elemento) }