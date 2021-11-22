

$("#mostrar").click(()  => {
  $("#contrasena").html(`<input type="text" id="contrasena" placeholder="Contraseña">`)
});

sesionUsuario = JSON.parse(localStorage.getItem("sesionUsuario"))
if (sesionUsuario === true) {
  $(".login[0]").hide();
  $(".login[1]").hide();
  $(".navegacion").append()
} 