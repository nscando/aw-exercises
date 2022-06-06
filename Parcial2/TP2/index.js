

window.addEventListener('load', validar);


function validar() {

    //Guardar los elementos del formulario en variables
    var formulario = document.getElementById("formulario");
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var telefono = document.getElementById("telefono");


    //Previene el comportamiento por defecto 
    //que se genera al presionar el boton submit
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        validarCamposFormulario();

    })

    function validarCamposFormulario() {
        var nombreValor = nombre.value;
        var emailValor = email.value;
        var telefonoValor = telefono.value;

        //Validacion de campo nombre
        if (!nombreValor || nombreValor.indexOf(" ") == 0) {
            console.log("nombre vacio");
            validarError(nombre, "El campo Nombre y Apellido es obligatorio");
        } else {
            console.log(nombreValor);
            validarCorrecto(nombre);
        }

        //Validacion de campo email
        if (!emailValor || emailValor.indexOf(" ") == 0) {
            console.log("email vacio");
            validarError(email, "El campo Email es obligatorio!");
        } else {
            console.log(emailValor);
            validarCorrecto(email);
        }

        //Validacion de campo telefono
        if (!telefonoValor || telefonoValor.indexOf(" ") == 0) {
            console.log("telefono vacio");
            validarError(telefono, "El campo Telefono es obligatorio!");
        } else {
            console.log(telefonoValor);
            validarCorrecto(telefono);
        }

        //Si todos los campos son validos mostrar mensaje de exito y resetear formulario
        if (nombreValor && emailValor && telefonoValor) {
            var envioExitoso = document.getElementById("envioExitoso");
            envioExitoso.innerText = "Formulario enviado correctamente!";

        }

    }


}

function validarError(input, mensaje) {
    //Utilizo la propiedad parentElement para obtener el padre del elemento especificado
    //para posteriormente poder mostrar el mensaje de error y cambiar el color del elemento
    var formularioControl = input.parentElement;
    var aviso = formularioControl.querySelector("p");
    aviso.innerText = mensaje;

    formularioControl.className = "formulario-control error";
}

function validarCorrecto(input) {
    var formularioControl = input.parentElement;
    formularioControl.className = "formulario-control correcto";

}

function formatearTelefono() {
    var telefono = document.getElementById("telefono");
    var telefonoValor = telefono.value;
    var telefonoFormateado = "";

    if (telefonoValor.length <= 4) {
        telefonoFormateado = "(" + telefonoValor + ")";
    } else if (telefonoValor.length <= 12) {
        telefonoFormateado = "(" + telefonoValor.substring(0, 4) + ") " + telefonoValor.substring(4, 6) + "-" + telefonoValor.substring(6, 12);
    }

    document.getElementById("telefono").value = telefonoFormateado;
}