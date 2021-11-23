let sesionUsuario;

if (localStorage.getItem("sesionUsuario" === null)) {
    sesionUsuario = false
} else {
    sesionUsuario = JSON.parse(localStorage.getItem("sesionUsuario"))
}


const login = document.getElementById("login");

login.addEventListener('submit', (e) => {
    e.preventDefault();
    sesionUsuario = localStorage.getItem(JSON.parse(sesionUsuario))
    if (sesionUsuario === true) {
        alert(`Ya has iniciado sesion como ${usuarioEnSesion.nombre}`)
    } else {
        let loginNombreUsuario = document.getElementById("nombreDeUsuario").value;
        let loginContrasena = document.getElementById("contrasena").value;
        const usuarioIngresando = listaUsuarios.find(usuario => usuario.alias == loginNombreUsuario);

        let bucle = true;

        sesionUsuario = false

        if (usuarioIngresando == null) {
            alert("el usuario no existe")
        } else {
            if (loginNombreUsuario === usuarioIngresando.alias) {
                while (bucle) {
                    if (loginContrasena === usuarioIngresando.contrasena) {
                        alert(`Has iniciado sesion como ${usuarioIngresando.alias}`)
                        bucle = false
                        sesionUsuario = true
                        localStorage.setItem("sesionUsuario", JSON.stringify(sesionUsuario))
                        let usuarioEnSesion = usuarioIngresando
                        localStorage.setItem("usuarioEnSesion", JSON.stringify(usuarioEnSesion))
                        window.location.href = "index.html"
                    } else {
                        alert("la contraseña es incorrecta")
                        break
                    }
                }
            }
        }
    }
});


