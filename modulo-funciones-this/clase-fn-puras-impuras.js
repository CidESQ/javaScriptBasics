// Funciones puras e impuras

//* Funciones puras:
//? Dada una entrada siempre producen una misma salida
//? No producen efectos secundarios

//! Side Effects | efectos secundarios
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Imprimir msg
// 5. Manipulación del DOM
// 6. Acceder info del Sistema

//? Funcion pura
function suma(a, b) {
  return a + b;
}

//? Aqui ya no es pura por que tiene Side effects | impura
function suma(a, b) {
  console.log("A", a);
  return a + b;
}

//? Funcion impura
let total = 0;
function sumWithSideEffect(a) {
  total += a;
  return total;
}

//? Funcion pura
function square(x) {
  return x * x;
}

//? Si se combinan dos funciones puras en otra, esta otra sigue siendo pura
