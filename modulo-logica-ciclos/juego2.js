/* 
Adivinar la palabra

El usuario tiene 3 intentos para adivinar la palabra

Requerimientos:
- El juego debe tener una palabra oculta.
- El juego puede dar una pista de la palabra.
- El usuario debe ingresar una suposición.
- El juego debe verificar si la suposición del usuario
es correcta.
- El juego debe tener un numero limitado de intentos.
- El juego debe terminar cuando el usuario adivina la
palabra oculta o se queda sin intentos.

*/
let palabra = "javascript";
let intentos = 3;

function verificarSuposicion(suposicion, palabra) {
    if (suposicion.toLowerCase() === palabra) {
        return true;
    }
    return false;
}

function jugarAdivinaLaPalabra() {
    alert("Bienvenido a jguar adivina la palabra");
    alert("tienes 3 intentos para tratar de adivinar");
    alert("-Pista- la palabra oculta es un lenguage de programacion");

    while (intentos > 0) {
        let suposicion = prompt("Ingresa la palabra: ");
        if (verificarSuposicion(suposicion, palabra)) {
            alert("ADIVINASTE");
            break;
        } else if (intentos > 0) {
            intentos--;
            alert(`Incorrecto te quedan ${intentos} intentos restantes`);
        } else {
            alert("PERDISTE la palabra oculta era: " + palabra);
        }
    }
}

jugarAdivinaLaPalabra();
