function resultado() {
    var p1, p2, p3, nota;


    if (document.getElementById('p11').checked == true) {
        p1 = 33;
        console.log("funciona1")
    }
    else { p1 = 0 }

    if (document.getElementById('p22').checked == true) {
        p2 = 33
        console.log("funciona1")
    }
    else { p2 = 0 }

    if (document.getElementById('p33').checked == true) {
        p3 = 34
        console.log("funciona1")
    }
    else { p3 = 0 }



    nota = p1 + p2 + p3;
    alert(" Aciertos: " + nota + "%");


    location.reload();
}