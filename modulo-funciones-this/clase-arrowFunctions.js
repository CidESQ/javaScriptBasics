//* las arrow funcion sirve para ser mas cortas y para evitar el tema del this y que no tenga ningun tipo de vinculacion
/* Funcion normal
function almuerzo (proteina, verdura) {
    return `hoy cenare ${proteina} con ${verdura}`
}
almuerzo('Pollo', 'zanahoria');
*/

/* Arrow Function
const almuerzo = (proteina, verdura) => {
    return `hoy cenare ${proteina} con ${verdura}`
}
almuerzo('Pollo', 'zanahoria');
*/

const greeting = function (name) {
  return `Hi, ${name}`;
};

//* Arrow function  - return explicito
const newGreeting = (name) => {
  return `Hi, ${name}`;
};

//* Arrow function  - return implicito
const newGreetingImplicit = (name) => `Hi, ${name}`;

//* Lexical binding
const fictionalCharacter = {
  charName: "Uncle Ben",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.charName} says ${message}`);
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.charName} says ${message}`); //? <- Aqui no se puede vincular con this por que es arrow function
  },
};

fictionalCharacter.messageWithTraditionalFunction(
  "Whit greatpower comes great responsability."
);

fictionalCharacter.messageWithArrowFunction("Beware of Dc Octopus.");
