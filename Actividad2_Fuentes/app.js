const { generarNumeroAleatorio, obtenerNumeroJugador, verificarAdivinanza } = require('./adivinanza');

const juegoAdivinanza = () => {
    console.log('¡Bienvenido al juego de adivinanza!');
    console.log('Debes adivinar el numero secreto del 1 al 100.');

    const numeroAleatorio = generarNumeroAleatorio();
    let adivinado = false;
    do {
        const numeroJugador = obtenerNumeroJugador();
        adivinado = verificarAdivinanza(numeroAleatorio, numeroJugador, adivinado);
    } while (!adivinado);
};
juegoAdivinanza();