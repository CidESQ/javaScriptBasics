//* Metodos que modifican el array original (Mutabilidad)

// 1.0 push()

const countries = ["Mexico", "Spain", "UK", "Canada"]; //? Aqui tambien se agrega Portugal
const newCountries = countries.push("Portugal");
console.log(countries);
console.log(newCountries);

// 2.0 pop()

const removeCountry = countries.pop();
console.log(countries);
console.log(removeCountry);
