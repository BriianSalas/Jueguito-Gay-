let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTL = document.querySelector(elemento);
    elementoHTL.innerHTML = texto;
    return;
}

function verificarIntento() {
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
// == para comparar / === para comparar valor y tipo. / = para definir o asignar
console.log(intentos);
if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} BBSOTE!`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    // EL usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor BBSUKI!');
    } else {
        asignarTextoElemento('p','El número secrero es mayor MI NEIGRO!');
    }
    intentos++;
    limpiarCaja();
}

return;
}
function limpiarCaja() {
document.querySelector('#valorUsuario').value = '';
return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números 
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya jugaste todos los números posibles MI RASTA!');

    } else {

    //Si el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Jueguito Gay!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo} BB!`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinicarJuego () {
    //Limpiar la caja. 
    limpiarCaja();
    //Indicar mensaje de intervelo de números
    //Generar número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    //Deshabiltar botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
