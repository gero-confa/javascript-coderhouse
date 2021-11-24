class Usuario {
    constructor(alias, nombre, mail, contrasena) {
        this.alias = alias;
        this.nombre = nombre;
        this.mail = mail;
        this.contrasena = contrasena
    }
}

let listaUsuarios = [{
    "alias": "RobZombie",
    "nombre": "Roberto Zambueza",
    "mail": "roberto.zambueza@gmail.com",
    "contrasena": "pocosegura"
}, {
    "alias": "Esthereum",
    "nombre": "Ester Urralde",
    "mail": "esterpiscore@gmail.com",
    "contrasena": "debecontenerunnumero"
}, {
    "alias": "definitivamenteunhumano",
    "nombre": "Connor Detroit",
    "mail": "connorsincaptcha@gmail.com",
    "contrasena": "01011110000101101010100"
}];


if (localStorage.getItem("listaUsuarios") == null) {
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
} else {
    listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))
}


function agregarUsuario(e) {
    e.preventDefault();
    let nuevoAlias = document.getElementById("nuevoAlias").value;
    let nuevoNombre = document.getElementById("nuevoNombre").value;
    let nuevoMail = document.getElementById("nuevoMail").value;
    let nuevaContrasena = document.getElementById("nuevaContrasena").value;
    let user = new Usuario(nuevoAlias, nuevoNombre, nuevoMail, nuevaContrasena);
    listaUsuarios.push(user)
}



let guardarLocal = () => {
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
};


const formNuevoUsuario = document.getElementById("crearUsuario");
formNuevoUsuario.addEventListener("submit", agregarUsuario)
formNuevoUsuario.addEventListener("submit", guardarLocal)