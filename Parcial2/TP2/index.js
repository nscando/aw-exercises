
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
        if (!nombreValor) {
            validarError(nombre, "El campo Nombre y Apellido es obligatorio");
        } else {
            validarCorrecto(nombre);

        }

        //Validacion de campo email
        if (!emailValor || emailValor.indexOf(" ") == 0) {
            validarError(email, "El campo Email es obligatorio!");
        } else {
            validarCorrecto(email);
        }

        //Validacion de campo telefono
        if (!telefonoValor || telefonoValor.indexOf(" ") == 0) {
            validarError(telefono, "El campo Telefono es obligatorio!");
        } else {
            validarCorrecto(telefono);
        }

        //Si todos los campos son validos mostrar mensaje de exito
        if (nombreValor && emailValor && telefonoValor) {
            var envioExitoso = document.getElementById("envioExitoso");
            envioExitoso.innerHTML = "Los datos han sido enviados en forma exitosa!";
        }
    }

}

function validarError(input, mensaje) {
    //Utilizo la propiedad parentElement para obtener el padre del elemento especificado
    //para posteriormente poder mostrar el mensaje de error y cambiar el color del elemento
    var formularioControl = input.parentElement;
    var aviso = formularioControl.querySelector("p");
    aviso.innerHTML = mensaje;
    formularioControl.className = "formulario-control error";
}

function validarCorrecto(input) {
    var formularioControl = input.parentElement;
    formularioControl.className = "formulario-control correcto";
}

function formatearCelular() {
    var celular = document.getElementById("celular");
    var celularValor = celular.value;
    var celularFormateado = "";

    if (celularValor.length <= 4) {
        celularFormateado = "(" + celularValor + ")";
    } else if (celularValor.length <= 12) {
        celularFormateado = "(" + celularValor.substring(0, 4) + ") " + celularValor.substring(4, 6) + "-" + celularValor.substring(6, 12);
    }

    document.getElementById("celular").value = celularFormateado;
}

