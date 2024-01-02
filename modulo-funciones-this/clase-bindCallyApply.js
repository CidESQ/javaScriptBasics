function dogGreeting(owner, address) {
  console.log(
    `Hi my name is ${this.dogName} and my owner is ${owner} and we live at ${address}`
  );
}
const owner = "Lucy";
const address = "main street 123";

const dogHouse = {
  dogName: "Pepito",
};

dogGreeting.call(dogHouse, owner, address); //? <- Enlace explicito

const dogInfo = [owner, address];
dogGreeting.apply(dogHouse, dogInfo); //? <- Otra forma de hacer enlace explicito con parametros de array

const bindingWithBind = dogGreeting.bind(dogHouse, owner, address); //? <- Nos regresa otra funcion ya construida con los parametros
bindingWithBind();
