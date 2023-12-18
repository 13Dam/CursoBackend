const readlineSync = require('readline-sync');
//función número aleatorio
const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
}
//función número jugador y validación
const obtenerNumeroJugador = () => {
    let numero;
    numero = parseInt(readlineSync.question("Ingrese un numero del 1 al 100: "));
    if (!isFinite(numero) || numero < 1 || numero > 100) {
        console.log("Error: La entrada no es un número válido.")
        return obtenerNumeroJugador();
    }
    return numero;
}
//función que verifica adivinanza
const verificarAdivinanza = (numeroAleatorio, numeroJugador, adivinado) => {
    if (numeroJugador === numeroAleatorio) {
        console.log("¡Felicitaciones! Has adivinado el numero.");
        adivinado = true;
    } else if (numeroJugador > numeroAleatorio) {
        console.log("El número que has ingresado es mayor que el numero a adivinar.");
    } else {
        console.log("El número que has ingresado es menor que el numero a adivinar.");
    }
    return adivinado;
}
module.exports = {
    generarNumeroAleatorio,
    obtenerNumeroJugador,
    verificarAdivinanza
};