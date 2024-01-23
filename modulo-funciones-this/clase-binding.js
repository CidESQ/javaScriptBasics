//* Binding Implicito
const person = {
    name: "Adam",
    greet: function () {
        console.log(`Hello, I'm ${this.name}`);
    },
};
person.greet();

//* Explicit Binding
function greetSomeone() {
    console.log(`Hello, I'm ${this.name}`);
}
const carls = { name: "Carls" };
greetSomeone.call(carls);

//! ATENCION! FUNCION PARA CONSTRUIR UN OBJETO (EMPIEZA CON MAYUSCULA)
//* New Bidning | Funcion constructora
function Person(name) {
    this.name = name;
}

const adam = new Person("Adam");
console.log(adam.name);

//* Lexical Binding
const persona = {
    name: "Charly",
    greet: function () {
        const innerFunction = () => {
            console.log(`Hello, I'm ${this.name}`);
        };
        innerFunction();
    },
};
persona.greet();

//* Window Binding
function showName() {
    console.log(this.name);
}
window.name = "Albert";
showName();
