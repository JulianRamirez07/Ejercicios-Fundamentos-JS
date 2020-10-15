const calculadora = (operacion) => {

    let A = document.getElementById('valor_uno');
    let B = document.getElementById('valor_dos');
    let resultadoCalculadora = document.getElementById('resultadoCalculadora');

    let valorA = parseInt(A.value);
    let valorB = parseInt(B.value);
    let respuesta;

    // console.log('Operacion >>' + operacion);

    switch (operacion) {
        case ('suma'):
            respuesta = valorA + valorB;
            break;

        case ('resta'):
            respuesta = valorA - valorB;
            break;

        case ('multiplicacion'):
            respuesta = valorA * valorB;
            break;

        case ('division'):
            respuesta = valorA / valorB;
            break;

        case ('limpiar'):
            A.value = "";
            B.value = "";
            respuesta = "";
            break;

        default:
            break;
    }

    resultadoCalculadora.innerText = respuesta;
};