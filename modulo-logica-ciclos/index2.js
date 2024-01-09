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

//* definiendo la base de datos de palabras
const palabraOculta = {
    //? Clave: palabra, Valor : pista
    sandia: "Es color roja.",
    manzana: "La mordio una princesa",
    platano: "Te puedes resbalar!",
    naranja: "Tengo nombre de color",
    melon: "corazon de ...",
};

//* escoger palabra random de la base de datos de palabras
const frutas = Object.keys(palabraOculta);
const frutaAleatoria = frutas[Math.floor(Math.random() * frutas.length)];
const pista = palabraOculta[frutaAleatoria];
let adivino = false;

let intentos = 3;

while (intentos > 0) {
    console.log("1.- Tratar de adivinar:");
    console.log("2.- Quiero una pista:");
    const opcion = prompt("Ingresa una opción: ");
    switch (opcion) {
        case "1":
            {
                const sugerencia = prompt(
                    "Adivina la fruta en la que estoy pensando:"
                );

                //* Verificar si la suposicion del usuario es correcta
                if (sugerencia == frutaAleatoria) {
                    console.log("Felicidades adivinaste! ");
                    intentos = 0;
                    break;
                } else if (intentos > 1) {
                    intentos--;
                    console.log(
                        `Intenta de nuevo aun tienes ${intentos} intento/s!`
                    );
                } else if (intentos == 1) {
                    console.log(`Fue tu ultimo intento!`);
                    console.log(`PERDISTEEE`);
                    intentos--;
                }
            }
            break;
        case "2":
            console.log(pista);
            break;
    }
}
