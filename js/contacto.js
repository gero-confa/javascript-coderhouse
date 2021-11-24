$("#formContacto").submit(function(e) {
    e.preventDefault();
    $("#formContacto").hide()
    $("#contacto").append(`<div>
    <h3>¡Gracias! Tu consulta ha sido enviada.</h3> 
</div>`);
    $("#contacto").fadeOut(2000, () => {
        $("#contacto").hide()
    });
});

$("#colaboradores").append(`<button id="btn1">NUESTROS COLABORADORES</button>`);


const URLJSON = "/JSON/colaboradores.json"


$("#btn1").click(() => {
    $("#empresas").toggle("fast");
})



$("document").ready(() => {
    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            console.log(estado)
            let misDatos = respuesta;
            for (const dato of misDatos) {
                $("#empresas").append(`<div>
                <h3>${dato.empresa}</h3>
                <a href="${dato.web}"> ${dato.web}</a>
                </div>`)
            }
        }
    });
});