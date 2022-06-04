
function atras() {
    window.history.back();
}


function adelante() {
    window.history.forward();
}

function actualizar() {
    window.location.reload();
}


var momento = new Date();

var hora = momento.getHours();
var minuto = momento.getMinutes();
var segundo = momento.getSeconds();

var horaActual = hora + ":" + minuto + ":" + segundo;
console.log(horaActual)