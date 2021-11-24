let vendedorEnUso = JSON.parse(localStorage.getItem("vendedorEnSesion"))
let vendedorIniciada = JSON.parse(localStorage.getItem("sesionVendedor"));


$(() => {
  if (vendedorIniciada !== true) {
    console.log("epe")
    $("#seccionCrearProducto").hide();
  } else if
      (vendedorIniciada === true) {
        console.log("ipi")
      $("#seccionCrearProducto").show();
      $("#login").hide();
      $("#vendedorTarjetaCreacion").hide();
    };
});

