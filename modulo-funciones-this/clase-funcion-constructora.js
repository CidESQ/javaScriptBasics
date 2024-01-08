//* Creando funciones constructoras (Crear objetos a partir de funciones)

//! Las funciones constructoras empiezan por masyusculas
function Rocket(name, message) {
  this.name = name;
  this.launchMessage = () => message; //? <- Aqui tambien puedo llamar funciones fuera del codigo
}
const personalizedMessage = () => "Goodbye everybody !";
const falcon9Rocket = new Rocket("Falcon9", personalizedMessage());
const falconHeavy = new Rocket("FalconHeavy", personalizedMessage());
console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());
console.log(falconHeavy.name);
console.log(falconHeavy.launchMessage());
//* -----------------------------
//// Creando funciones constructoras con arrow functions
//* Creando una funcion con retorno implicito de objeto
const sailorShip = (name, message) => ({
  //? <- Aqui se ponen parentesis para indicar que no es un bloque de codigo, si no, un objeto
  name: name,
  launchMessage: message,
});

const personalizedMessageForArrowFun = () => "Ship ready to sail !";

const laGaviotaYatch = sailorShip(
  "laGaviotaYatch",
  personalizedMessageForArrowFun
);
console.log(laGaviotaYatch.name);
console.log(laGaviotaYatch.launchMessage());
