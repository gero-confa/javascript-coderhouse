class Producto {
    constructor(nombre, precio, stock, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria
    }
}

let listaProductos = [{
    "nombre": "Cafe dark Roast molido envase 500gr",
    "precio": "600",
    "stock": "100",
    "categoria": "cafe"
}, {
    "nombre": "Cafetera italiana 2 posillos",
    "precio": "1200",
    "stock": "40",
    "categoria": "cafetera"
}, {
    "nombre": "Filtro x 10 unidades",
    "precio": "300",
    "stock": "200",
    "categoria": "filtros"
}, {
    "nombre": "Cafetera Nescafe capsulas",
    "precio": "8000",
    "stock": "20",
    "categoria": "cafetera"
}];

if (localStorage.getItem("listaProductos") == null) {
    localStorage.setItem("listaProductos", JSON.stringify(listaProductos))
} else {
    listaProductos = JSON.parse(localStorage.getItem("listaProductos"));
}

