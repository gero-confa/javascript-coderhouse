let carrito;
let btn = document.getElementById("finalizarCompra")
if (localStorage.getItem("carrito") == null) {
    carrito = []
} else {
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

const finalizarCompra = () => {
    let sesionIniciada = JSON.parse(localStorage.getItem("sesionUsuario"));
    if (sesionIniciada === true) {
        totalCompra = 0
        carrito.forEach(element => {
            let valorSumar = Number(element.precio)
            totalCompra += valorSumar
        });
        alert(`Tu total es de ${totalCompra}`)
    } else {
        alert(`Necesitas iniciar sesion`)
        window.location.href = "login.html"
    }
}

btn.addEventListener("click", () => {
    finalizarCompra()
})

