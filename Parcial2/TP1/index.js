window.addEventListener('load', validar);


function validar() {

    //Guardar los elementos del formulario en variables
    var formulario = document.getElementById("formulario");
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");



    //Previene el comportamiento por defecto 
    //que se genera al presionar el boton submit
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        validarCamposFormulario();
    })

    function validarCamposFormulario() {
        var nombreValor = nombre.value;
        var emailValor = email.value;

        //Validacion de campo nombre
        if (!nombreValor || nombreValor.indexOf(" ") == 0) {
            validarError(nombre, "El campo Nombre es obligatorio");
        } else {
            validarCorrecto(nombre);
        }

        //Validacion de campo email
        if (!emailValor || emailValor.indexOf(" ") == 0) {
            validarError(email, "El campo Email es obligatorio!");
        } else {
            validarCorrecto(email);
        }

        //Si todos los campos son validos mostrar mensaje de exito y resetear formulario
        if (nombreValor && emailValor) {
            var envioExitoso = document.getElementById("envioExitoso");
            envioExitoso.innerText = "Formulario enviado correctamente!";
            formulario.reset();
        }

    }


}

function validarError(input, mensaje) {
    //Utilizo la propiedad parentElement para obtener el padre del elemento especificado
    //para posteriormente poder mostrar el mensaje de error y cambiar el color del elemento
    var formularioControl = input.parentElement;
    var aviso = formularioControl.querySelector("span");
    aviso.innerHTML = mensaje;

    formularioControl.className = "grupo error";
}

function validarCorrecto(input) {
    var formularioControl = input.parentElement;
    formularioControl.className = "grupo correcto";
}

