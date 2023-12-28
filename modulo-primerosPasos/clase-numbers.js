//* Tipo entero y decimal
const entero = 42; //? Tipo number
const decimal = 23.2; //? Tipo number

console.log(typeof entero, typeof decimal);

//* Notacion cientifica
const cientifico = 5e3;
console.log(typeof cientifico); //? Tipo number
console.log(cientifico);

//* Infinitos y NaN
const infinito = Infinity;
const noNumero = NaN;
console.log(infinito);

//*  Operaciones aritmeticas
//1 Suma, Resta, Multiplicación y división
const suma = 2 + 4;
const resta = 2 - 4;
const multiplicación = 8 * 4;
const division = 8 / 3;

//2 Modulo y exponenciacion
const modulo = 15 % 3;
const expo = 2 ** 3;

//! Precision
const resultado = 0.1 + 0.2; //! 0.1 + 0.2 = 0.30000000000000004
console.log(resultado);
console.log(resultado.toFixed(1)); //! 0.1 + 0.2 = 0.3
console.log(resultado == 0.3); //! False

//! Operaciones avanzadas
const raiz2 = Math.sqrt(9);
const valorAbs = Math.abs(-13);
const aleatorio = Math.random();
console.log(raiz2);
console.log(valorAbs);
console.log(aleatorio.toFixed(1) * 10);
