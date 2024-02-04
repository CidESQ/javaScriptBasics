//* metodos que modifican el array original

//* splice()
const veggies = ["carrots", "spinach", "tomato", "onion"];
const removedVeggies = veggies.splice(2, 1, "cucumber", "broccoli");
console.log(veggies);
console.log(removedVeggies);

//* reverse()
const numbers = [1, 2, 3, 4, 5, 6];
const reverseNumbers = numbers.reverse();
console.log(numbers);
console.log(reverseNumbers);

//* sort() //? ordena por medio de UNICODE
const randomNum = [4, 18, 1, 62, 34];
const orderedRandomNum = randomNum.sort();
console.log(randomNum);
console.log(orderedRandomNum);

//* sort() numbers
const unsortedNumbers = [32, 43, 41, 46, 76];
const sortedNum = unsortedNumbers.sort((a, b) => a - b);
//? 32 - 43 = -11 bien
//? 43 - 41 = 2 mover
//? 41 - 46 = bien
console.log(unsortedNumbers);
console.log(sortedNum);

//* sort() with strings con UTF-16
const cities = ["New York", "Zambia", "Seville", "Vancouver"];
const sortedCities = cities.sort();
console.log(sortedCities);
