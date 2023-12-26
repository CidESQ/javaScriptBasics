//* Strings primitivos (valor)
const stringPrimitivo = "Soy un string primitivo";
const stringPrimitivoTbm = String("Soy un string primitivo");
console.log(typeof stringPrimitivo, typeof stringPrimitivoTbm);

//* String objeto (referencia)
const stringObjeto = new String("Soy un string objeto");
console.log(stringObjeto);

//Acceder a caracteres

const saludo = "Hola ¿como estas?";
console.log(saludo[0]); // H
console.log(saludo.charAt(0)); // H
console.log(saludo.indexOf("z"));
console.log(saludo.slice(3, 9));
console.log(saludo.length);
console.log(saludo.toUpperCase());
const saludoDivido = saludo.split(" "); //? Lo convierte a un array
console.log(saludoDivido);
