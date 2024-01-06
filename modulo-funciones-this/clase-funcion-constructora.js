//* Creando funciones constructoras (Crear objetos a partir de funciones)
const personalizedMessage = () => "Goodbye everybody !";

//! Las funciones constructoras empiezan por masyusculas
function Rocket(name, message) {
  this.name = name;
  this.launchMessage = () => message; //? <- Aqui tambien puedo llamar funciones fuera del codigo
}

const falcon9Rocket = new Rocket("Falcon9", personalizedMessage());
const falconHeavy = new Rocket("FalconHeavy", personalizedMessage());
console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());
console.log(falconHeavy.name);
console.log(falconHeavy.launchMessage());
//* -----------------------------
//* Creando funciones constructoras con arrow functions
const sailorShip = (name, message) => ({
  //? <- Aqui se ponen parentesis
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
