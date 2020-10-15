// Codificación ejercicio #1
document.getElementById('input_Form')
    .addEventListener('submit', function (e) {
        const Texto = document.getElementById('texto').value;

        // function inverirtTexto(cadena) {
        //     let resultado = '';
        //     for (let i = cadena.length - 1; i >= 0; i--) {
        //         resultado = resultado + cadena[i];
        //     }

        //     return resultado;
        // }

        let arrayTexto = Texto.split(""); // 'splt' convierte un string en un array
        let contador = 0;

        // Recorrer array con un "FOR" normal
        for (let i = 0; i < arrayTexto.length; i += 1) {
            if (arrayTexto[i] == " ")
                contador++;
        }

        // Recorrer array con un "FOR EACH"
        // arrayTexto.forEach(caracter => {
        //     if (caracter == " ")
        //     contador++;
        // });

        // Recorrer array con un "FOR OF"
        // for (let caracter of arrayTexto) {
        //     if (caracter == " ")
        //     contador++;
        // }

        const resultado = document.getElementById('resultado')
        const elementoHTML = document.createElement('div');
        elementoHTML.innerHTML += `
            <div class="card" text-center mb-4>
                <div class="card-body">
                    <strong>Texto invertido</strong>: ${(arrayTexto.reverse())} <br>
                    <strong>Longitud</strong>: ${(arrayTexto.length)} <br>
                    <strong>Espacios</strong>: ${(contador)} <br>
                </div>
            </div>
            `;
        resultado.appendChild(elementoHTML);
        e.preventDefault();
    });