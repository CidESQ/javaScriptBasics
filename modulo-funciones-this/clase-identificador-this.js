// const house = {
//   dogName: "Lua",
//   dogGreeting: function () {
//     console.log(`Guau! Soy ${this.dogName}`); //? Enlace implicito || implicit binding
//   },
// };

// house.dogGreeting();

//* --------- Enlace explicito || explicit binding
function dogGreeting() {
  console.log(`Guau! Soy ${this.dogName}`);
}

const newHouse = {
  dogName: "Kisha",
  // dogOwner: "Xime",
  // dogAddress: "Actipan 5 std",
};

// dogGreeting.call(newHouse); //? Aqui vinculamos el objeto con la función

function newDogGreeting(owner, address) {
  console.log(
    `Guaff! Soy ${this.dogName} and I live with ${owner} at ${address}`
  );
}

const dogOwner = "Xime";
const dogAddress = "Actipan 5 cdCancun";

newDogGreeting.call(newHouse, dogOwner, dogAddress);
