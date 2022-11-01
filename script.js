String.prototype.replaceAt=function(index, character) {
    return this.substring(0, index) + character + this.substring(index + character.length)
}

const palabras = [
    'hogar',
    'perros',
    'gato',
    'elefante',
    'gallinas'
];

const calcular = document.getElementById('calcular');
const salida = document.getElementById('output');
const ahorcado = document.getElementById('ahorcado');
const inputLetra = document.getElementById('letra');
const errorLimite = document.getElementById('error-limite');
const contenedorInformacion = document.getElementById('contenedor-informacion');

const palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabraConGuiones = palabra.replace(/./g, '_ ');
let contadorFallos = 0;


errorLimite.innerHTML = 4 - contadorFallos;
calcular.addEventListener('click', () => {
    const letra = document.getElementById('letra').value;
    let fallado = true;
    for (const i in palabra) {
        if (letra == palabra[i]) {
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            fallado = false;
        }
    }

    if (fallado) {
        contadorFallos++;
        ahorcado.style.backgroundPosition = -(200 * contadorFallos) + 'px 0';
        errorLimite.innerHTML = 4 - contadorFallos;
        if (contadorFallos == 4) {
            alert('Perdiste el juego');
        }
    } else {
        if (palabraConGuiones.indexOf('_') < 0) {
            alert('Victoria');
        }
    }

    salida.innerHTML = palabraConGuiones;
    
    inputLetra.value = '';
    inputLetra.focus();
});

