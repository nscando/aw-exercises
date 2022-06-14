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
        // validarNombre();
    })


    function validarCamposFormulario() {
        var nombreValor = nombre.value;
        var emailValor = email.value;
        var contador = 0;

        while (contador == 0) {
            //Validacion de campo nombre
            if (!nombreValor || nombreValor.indexOf(" ") != -1) {
                contador++;
                validarError(nombre, "El campo Nombre es obligatorio y no debe contener espacios");
            } else {
                validarCorrecto(nombre);
                contador--;
            }

            //Validacion de campo email
            if (!emailValor || emailValor.indexOf(" ") != -1) {
                validarError(email, "El campo Email es obligatorio!");
                contador++;
            } else {
                validarCorrecto(email);
                contador--;
            }
            contador++;
        }
        //Si todos los campos son validos mostrar mensaje de exito y resetear formulario
        if (contador < 0) {
            var envioExitoso = document.getElementById("envioExitoso");
            envioExitoso.innerHTML = "Formulario enviado correctamente!";
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

