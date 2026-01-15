// String Methods

let string_variable = "Hello World"; // Works as array index

// Length
// console.log(string_variable.length) // 11

// if(string_variable.length < 5) {
//   console.log("The name field must be more than 5 charachters")
// }

// toUpperCase
// console.log(string_variable.toUpperCase())

// toLowerCase
// console.log(string_variable.toLowerCase())

// trim
// console.log(" Hello ".trim())
// console.log(" Hello ".trimStart())
// console.log(" Hello ".trimEnd())

// includes
// console.log(string_variable.includes("hello")) // Case Sensitive

// startsWith
// console.log(string_variable.startsWith("Hello")) // Case Sensitive

// endsWith
// console.log(string_variable.endsWith("d")) // Case Sensitive

// indexOf
// console.log(string_variable[1])
// console.log(string_variable.indexOf("l"))

// slice
// console.log(string_variable.slice(0,5)) // don't read the last index

// substring
// console.log(string_variable.substring(0,3))

// replace
// console.log(string_variable);
// console.log(string_variable.replace("World", "Muzammil"));

// split
// console.log(string_variable.split(" "));
// console.log(string_variable.split(" ")[0][0]);

// Array Methods

let fruits = ["Apple", "Mango", "Banana"];
let someOtherFruits = ["Orange", "Carrot", "Kiwi"];

let numbers = [1, 2, 3, 4];

// push -> Push in the end
// fruits.push("Orange");
// console.log(fruits);

// pop -> Remove from the end
// fruits.pop();
// console.log(fruits);

// unshift - Add in the start
// fruits.unshift("Orange");
// console.log(fruits);

// shift - Remove from the start
// fruits.shift();
// console.log(fruits);

// forEach
// fruits.forEach((fruit) => console.log(`The fruit name is ${fruit}`));

// map
// fruits.map((fruit) => console.log(`The fruit name is ${fruit}`));

// filter
// console.log(fruits.filter((filter) => filter !== "Apple"));
// console.log(numbers.filter((number) => number % 2 === 0));

// reduce
// let totalPrice = 0; -> accumulator

// numbers.forEach((number) => {
//   totalPrice = number + totalPrice;
// });

// console.log(totalPrice);

// console.log(numbers.reduce((acc, number) => acc + number));

// includes
// console.log(fruits.includes("Apples"));

// indexOf
// console.log(fruits.indexOf("Mango"));

// slice
// console.log(fruits.slice(0, 1));

// splice
// console.log(fruits.splice(0, 1));

// concat
// console.log(fruits.concat(someOtherFruits)); // Copy Method
// console.log(fruits);

// Object Methods

let myObj = {
  name: "Ahmed",
  profession: "Coder",
  isStudying: false,
};

// console.log(myObj);

// keys
// console.log(Object.keys(myObj));

// values
// console.log(Object.values(myObj));

// entries
// console.log(Object.entries(myObj));

// Spread Operator
const nonConfidentialDetails = {
  name: "Ahmed",
  profession: "Coder",
  isStudying: false,
};

const confidentialDetails = {
  password: "123",
  token: "12347sakj",
  secret_key: "safjksafd",
};

// const dataOfAhmed = {
//   ...nonConfidentialDetails,
//   ...confidentialDetails,
// };
// console.log(dataOfAhmed.name);
