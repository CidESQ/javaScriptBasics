//* Ejercicio practico js
// 1. User
const username = "cidcodes";
const fullname = "Cid Esquivel";
const age = 22;

// 2. Address
const addres = {
  country: "Mexico",
  city: "Toluca",
  street: "Main street",
  number: 209,
};

// 3. Hobbies
const hobbies = ["Reading", "Fitness", "Personal Development", "Programming"];

// 4. Generating personalized bio
const personalizedBio = `Hello! welcome to ${username}'s profile,
My name is ${fullname} and I'm ${age} years old.
I am from ${addres.country} and live in ${addres.city}.
Some of my hobbies are: ${hobbies.join(", ")}.
Follow me for more content`;

//--
console.log(personalizedBio);
