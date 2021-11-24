let sesionVendedor;

if (localStorage.getItem("sesionVendedor" == null)) {
    sesionVendedor = false
} else {
    sesionVendedor = JSON.parse(localStorage.getItem("sesionVendedor"))
}

const ingresoVendedor = (e) => {
    e.preventDefault();
    sesionVendedor = localStorage.getItem(JSON.parse(sesionVendedor))
    if (sesionVendedor === true) {
        window.location.href = "index.html"
    } else {
        let ingresoNombreVendedor = document.getElementById("nombreDeUsuario").value;
        let ingresoContrasenaVendedor = document.getElementById("contrasena").value;
        const vendedorIngresando = listaVendedores.find(vendedor => vendedor.nombre == ingresoNombreVendedor);

        let bucle = true;

        sesionVendedor = false

        if (vendedorIngresando == null) {
            alert("el usuario no existe")
        } else {
            if (ingresoNombreVendedor === vendedorIngresando.nombre) {
                while (bucle) {
                    if (ingresoContrasenaVendedor === vendedorIngresando.contrasena) {
                        alert(`Has iniciado sesion como ${vendedorIngresando.nombre}`)
                        bucle = false
                        sesionVendedor = true
                        localStorage.setItem("sesionVendedor", JSON.stringify(sesionVendedor))
                        let vendedorEnSesion = vendedorIngresando
                        localStorage.setItem("vendedorEnSesion", JSON.stringify(vendedorEnSesion))
                        window.location.href = "vendedores.html"
                    } else {
                        alert("la contraseña es incorrecta")
                        break
                    }
                }
            }
        }
    }
}


const agregarProducto = () => {
    let formNombre = document.getElementById("productoNombre").value;
    let formPrecio = document.getElementById("productoPrecio").value;
    let formStock = document.getElementById("productoStock").value;
    let formCategoria = document.getElementById("productoCategoria").value;
    let nuevoProducto = new Producto(formNombre, formPrecio, formStock, formCategoria);
    listaProductos.push(nuevoProducto)
}    

const productoLocal = () => {
    localStorage.setItem("listaProductos", JSON.stringify(listaProductos))
};


const iniciarSesion = document.getElementById("ingresoVendedor");
iniciarSesion.addEventListener("submit", ingresoVendedor)

let formularioCreacion = document.getElementById("crearProducto");
formularioCreacion.addEventListener("submit", agregarProducto)
formularioCreacion.addEventListener("submit", productoLocal);