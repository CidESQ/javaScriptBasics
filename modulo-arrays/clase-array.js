//* How to create an array ?

// 1. new Array() or Array()

const frutas = Array("apple", "banana", "orange");
console.log(frutas);

const justANumber = Array(12); //? Aqui no pone un 12, hace un array de 12 posiciones
console.log(justANumber);

const oneNumber = [4]; //? Aqui si pone un numero

const emptyArray = [];
console.log(emptyArray);

const sports = ["soccer", "tennis", "rugby"];
console.log(sports);

const objetos = [
    "Flour",
    12,
    true,
    "1",
    {
        ingridient: "Milk",
        quantity: 1,
    },
];

console.log(objetos);

// 2. Accesing array elements
const fruta = frutas[0];
console.log(fruta);
console.log(frutas.length);

frutas.push("sandia"); //? Agrega sandia
frutas.concat(["grape", "kiwi"]); //? concatena dos arrays

//? Checking arrays with Array.isArray()

const isArray = Array.isArray(frutas);
console.log(isArray); //? true

//* Exercise: Sum all the elements of an array

const sumArray = [1, 2, 3, 4, 5, 6, 6];
let total = 0;
for (let i = 0; i < sumArray.length; i++) {
    total += sumArray[i];
}
console.log(total);
