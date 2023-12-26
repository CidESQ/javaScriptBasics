//* Creación de strings
const primeraOpcion = "Comillas simples";
const segundaOpcion = "Comillas dobles";
const terceraOpcion = `Comillas backstick`;

//! 1. Concatenación : opcion +
const direccion = " Calle falsa 123";
const ciudad = " SpringField";
const direccionCompleta = "Mi dirección es: " + direccion + ciudad;
// console.log(direccionCompleta);

//! 2. Concatenación : template literals
const nombre = "Cid";
const pais = "Mexico";
const presentacion = `Hola soy ${nombre} y resido en ${pais}`;
// console.log(presentacion);

//! 3. Concatenación : join()
const primeraParte = "1";
const segundaParte = "2";
const tercerParte = "3";
const orden = [primeraParte, segundaParte, tercerParte];
// console.log(orden.join(" ")); //? Que los separe con un espacio

//! 4. Concatenación : concat()
const hobbie1 = "programar";
const hobbie2 = "Gimnasio";
const hobbie3 = "Leer";
const misHobbies = "Mis hobbies son: ".concat(
  hobbie1,
  ", ",
  hobbie2,
  " y ",
  hobbie3,
  "."
);
console.log(misHobbies);

//! Caracteres de escape
// //const whatDoIDo = 'I'am a software engineer';
//* 1 Escape alternativo
const whatDoIDo = "I'm a software engineer";

//* 2 Escape barra invertida
const barraInvertida = "I'm Cid";

//* 3 Escape Template literals
const templateLiterals = `I'm Cid`;

//! Escritura de strings largos

/*
Lorem ipsum dolor sit amet consectetur adipisicing 
elit. Ipsa, quas nemo suscipit 
debitis laudantium laboriosam. Excepturi, ducimus amet.
*/
const poema =
  "Lorem ipsum dolor sit amet consectetur adipisicing, \n" +
  "elit. Ipsa, quas nemo suscipit \n" +
  "debitis laudantium laboriosam. Excepturi, ducimus amet";
console.log(poema);

const poema2 =
  "Lorem ipsum dolor sit amet consectetur adipisicing, \n\
  elit. Ipsa, quas nemo suscipit \n\
  debitis laudantium laboriosam. Excepturi, ducimus amet";
console.log(poema2);
