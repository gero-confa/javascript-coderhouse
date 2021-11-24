let usuarioEnUso = JSON.parse(localStorage.getItem("usuarioEnSesion"))
let sesionIniciada = JSON.parse(localStorage.getItem("sesionUsuario"));


$("#mostrar").click(()  => {
  let element = document.getElementById('contrasena');
  if (element.type === 'password') {
    element.type = 'text'
  } else if (element.type === 'text') {
    element.type = 'password'
  }
});


$(() => {
  if (sesionIniciada === true) {
    $(".login").hide();
    alert(`Ya has iniciado sesion como ${usuarioEnUso.alias}`)
    window.location.href = "index.html"
  }; 
});
