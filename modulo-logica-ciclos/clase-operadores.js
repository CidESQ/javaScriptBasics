//* Operadoes de comparación

/* 
    == Es igual
    === Es igual en tipo de dato y valor
    != Es diferente
    !== Es diferente en tipo y valor
    > Mayo que
    < menor que
    >= mayor o igual
    <= menor o igual
    
*/
//* Operadores logicos

/*
    && AND
    || OR
    ! NOT
*/

//* EJECUCION CONDICIONAL (ternario)
const edad = 19;
const mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje);

//* Switch
let variable = 5;

//? usa el ===
switch (variable) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    case 4:
    case 5:
        console.log("4 y 5");
        break;
    default:
        console.log("default");
        break;
}
