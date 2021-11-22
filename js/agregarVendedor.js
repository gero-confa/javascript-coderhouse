class Vendedor {
    constructor(nombre, cuit, mail, contrasena) {
        this.nombre = nombre;
        this.cuit = cuit;
        this.mail = mail;
        this.contrasena = contrasena;
    }
}

const crearVendedor = (e) => {
    e.preventDefault();
    let vendedorNombre = document.getElementById("nombreVendedor").value;
    let vendedorCuit = document.getElementById("cuitVendedor").value;
    let vendedorMail = document.getElementById("vendedorEmail").value;
    let vendedorContrasena = document.getElementById("contrasenaVendedor").value;
    let nuevoVendedor = new Vendedor(vendedorNombre, vendedorCuit, vendedorMail, vendedorContrasena);
    listaVendedores.push(nuevoVendedor)
}

let listaVendedores = [{
        "nombre": "Coffee Store",
        "cuit": "66-6666666-2",
        "mail": "contacto@thecoffeestore.com",
        "contrasena": "soyadmin1"
    },
    {
        "nombre": "Starbucks",
        "cuit": "12-3456789-2",
        "mail": "ventas@starbucks.com.ar",
        "contrasena": "soyadmin1"
    },
    {
        "nombre": "YPFFull",
        "cuit": "69-666666-5",
        "mail": "ventas@starbucks.com.ar",
        "contrasena": "soyadmin1"
    }
];


if (localStorage.getItem("listaVendedores") == null) {
    localStorage.setItem("listaVendedores", JSON.stringify(listaVendedores))
} else {
    listaVendedores = JSON.parse(localStorage.getItem("listaVendedores"))
}




let guardarLocal = () => {
    localStorage.setItem("listaVendedores", JSON.stringify(listaVendedores))
};


const formVendedorNuevo = document.getElementById("crearVendedor");
formVendedorNuevo.addEventListener("submit", crearVendedor)
formVendedorNuevo.addEventListener("submit", guardarLocal)