
function cambioEuro() {
    var euro = 310;
    var resultado;

    var pesos = parseInt(document.getElementById('pesos1').value);
    console.log(pesos);
    resultado = pesos / euro;

    document.getElementById('resultado-euro').value = resultado;
    console.log(resultado);

}

function cambioDolar() {
    var dolar = 210;
    var resultado;

    var pesos = parseInt(document.getElementById('pesos2').value);
    console.log(pesos);
    resultado = pesos / dolar;

    document.getElementById('resultado-dolar').value = resultado;
    console.log(resultado);

}
