var aviso = document.getElementById("aviso");

function validar() {
    var texto = document.getElementById("texto").value;

    if (texto == "%" || texto == "$" || texto == "@" || texto == "&" || texto == "*") {
        alert("caracter invalido, intente nuevamente");
    }
}