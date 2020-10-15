// Codificación ejercicio #2
document.getElementById('input_Form_dos')
    .addEventListener('submit', function (e) {
        let Cadena = document.getElementById('texto_dos').value;

        let caracter;
        let i;

        const resultado_dos = document.getElementById('resultado_dos')
        const elementoHTML_dos = document.createElement('p');

        for (i = 0; i < Cadena.length; i++) {
            caracter = Cadena.charAt(i);
            if (i == Cadena.length - 1) {
                // document.write(caracter);
                elementoHTML_dos.innerHTML += `
                   
                    <strong> ${(caracter)} </strong>

                    `;
                resultado_dos.appendChild(elementoHTML_dos);
                e.preventDefault();
            }
            else {
                // document.write(caracter + "-");
                elementoHTML_dos.innerHTML += `

                        <strong> ${(caracter + "-")} </strong>

                    `;
                resultado_dos.appendChild(elementoHTML_dos);
                e.preventDefault();
            }
        }
    });

    // let frase = 0;
    /* for (let caracter of arrayFrase) {
        if (caracter == " ") {
            contador++
        }

        frase = frase + caracter + "-"

    } 
    
    salida.innerText = frase*/