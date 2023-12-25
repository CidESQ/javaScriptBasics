/* 
TIPOS DE DATOS:
    Primitivos: string, number, boolean, null, undefined, symbol, bigint (INMUTABLES: Se pasan por valor)
    Complejos: object, array, function (MUTABLES (se modifica el valor original): Se pasan por referencia)
*/
//! Tipo de dato primitivo - Inmutable
let numero = 23;
let numero2 = numero;
numero2 = numero2 + 1;
console.log(numero2); //24
console.log(numero); //23

//! Tipo de dato complejo - Mutable
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr2); //[ 1, 2, 3, 4 ]
console.log(arr1); //[ 1, 2, 3, 4 ] <- Tambien se agrega a arr1
//* Apuntan al mismo lugar

//* Se tiene que copiar no pasar por referencia para hacer un nuevo dato complejo
