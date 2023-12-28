//* Explicit Type casting
const string = "42";
const integer = parseInt(string);
console.log(typeof integer);

const decimalString = "3.12";
const float = parseFloat(decimalString);
console.log(typeof float);

//* to binary
const binario = "10101011";
const decimal = parseInt(binario, 2);
console.log(decimal, typeof decimal, typeof binario);

//* type casting de forma implicita
const suma = "5" + 3;
console.log(suma); //! concatena

const suma2 = "3" + false;
console.log(suma2);
