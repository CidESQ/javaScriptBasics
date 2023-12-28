//* null
const snoopy = null;
console.log(snoopy);
console.log(typeof snoopy);

//* Undefined
let name;
console.log(name);

//* Symbol
const uniqueId = Symbol("id");

const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol1 === symbol2); //? los detecta totalmente diferentes

const ID = Symbol("id");
let user = {};
user[ID] = "1234";
console.log(user); //? salida => { [Symbol(id)]: '1234' }

// Bigint
const bigNumber = 123478912734128734907812973461204n; //? Numero grande con 'n' al final
console.log(bigNumber);

const numberOfParticlesInTheUniverse = 1000000000000000000000000n;
console.log(numberOfParticlesInTheUniverse);
