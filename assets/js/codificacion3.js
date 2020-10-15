const BotonLista = document.getElementById('BotonLista');
const lista = document.getElementById('lista');

let usuarios = [];
let existe;

BotonLista.addEventListener('click', (e) => {

    const textoLista = document.getElementById('textoLista'); //se obtiene la etiqueta del input
    const TextoIn = textoLista.value; //se obtiene el valor del imput

    // console.log('El usuario digitado es '+ TextoIn);

    if (TextoIn != "") {
        existeUsuario(TextoIn)
        if (!existe) {
            usuarios.push(TextoIn) // método 'push' insertar valores nuevos al array
        } else {
            alert ("El usuario " + TextoIn + " ya existe")
        }

    } else {
        usuarios.sort(); // método 'sort' ordena el array
        pintarArray();
    }

    textoLista.value = ""; 

    e.preventDefault();
});

const pintarArray = () => {

    for (usuario of usuarios) {
        let etiqueta = document.createElement('li');
        etiqueta.textContent = usuario;
        lista.appendChild(etiqueta);
    }
};

const existeUsuario = (usuarioIn) => {

    existe = false;

    for (usuario of usuarios) {
        if (usuario === usuarioIn)
        existe = true;
    }
};