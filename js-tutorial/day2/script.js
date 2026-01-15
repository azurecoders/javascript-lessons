// Conditional Statements

// let age = 17;

// if (age > 18) {
//   console.log("The age is above 18");
// } else if (age > 15) {
//   console.log("The age is greater than 15");
// } else {
//   console.log("The age is less then 18");
// }

// Ternary Operator

// condition ? condition_true : condition_false
// console.log(
//   age > 18
//     ? console.log("The age is greater than 18")
//     : console.log("The age is less than 18")
// );

// Loops

// Increment Operator
// i += 2
// i++ (Increment by 1)

// Decrement Operator
// i -= 2
// i-- (Decrement by 1)

// There is checking order difference in these loops

// For Loop
// for (var i = 0; i <= 100; i++) {
//   console.log(i);
// }

// While loop
// var j = 10;
// while (j <= 100) {
//   console.log(j);
//   j++;
// }

// Do while

// var k = 0;
// do {
//   console.log(k);
//   k++;
// } while (k < 100);

// Template Literals
// console.log(`Hello ${name} Greeting to you ${name}`);

// DNR -> DO NOT REPEAT

// Functions
// Help to reduce repetition of code

// var name = "Ahmed";
// console.log(`Hello ${name}`);
// console.log(`Hello ${name}`);
// console.log(`Hello ${name}`);
// console.log(`Hello ${name}`);

// Parameters are the arguments passed to a function

// Syntax 1

// function greet(name, age = 10) {
//   console.log(`Hello ${name}, your age is ${age}`);
// }

// greet("Muzammil", 18);
// greet("Ahmed", 19);
// greet("Ibrahim", 20);
// greet("Arshad", 21);

// Fat Arrow Function - Syntax 2 - ES6

// const greet = (name, age) => {
//   console.log(`Hello ${name}, your age is ${age}`);
// };

// greet("Muzammil", 18);
// greet("Ahmed", 19);
// greet("Ibrahim", 20);
// greet("Arshad", 21);

// Intermediate JavaScript

// Data Types

// Primitive Data Types
// String => "hello world!" 'Hello World'
// Integer => Number => 18 19 20 20000
// Float => Number => 18.43 8.8 234.999 // Decimal Point Values
// Boolean => True / False => true / false
// Null => var phoneNumber = null;
// Undefined = var gender = undefined;

// Non Primitive Data Types
// Function
// Array
// Object

// let name = "Muzammil";

// let names = ["Muzammil", "Ahmed", "Arshad", "Ibrahim"];

// console.log(`Length of an array: ${names.length}`); // Start by 1
// console.log(name);

// console.log(names);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// for (var i = 0; i < names.length; i++) {
//   console.log(`Index: ${i}`);
//   console.log(names[i]);
// }

// Object

let myObj = {
  name: "Muzammil",
  age: 17,
  class: 11,
  isStudying: true,
};

let names = [
  {
    name: "Muzammil",
    age: 17,
  },
  {
    name: "Ahmed",
    age: 21,
  },
  {
    name: "Arshad",
    age: "22",
  },
];

// console.log(myObj.name, myObj.age);
// console.log(names[0].name);

for (var i = 0; i < names.length; i++) {
  console.log(names[i].name);
}
