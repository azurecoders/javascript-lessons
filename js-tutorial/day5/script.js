// Call Stack - Done
// Global Execution Context - Done
// Scoping and Hoisting - Done
// Temporal Dead Zone - Done
// Lexical Scopes - Done - Global Scope, Local Scope, Nested Scope
// Closures - Done
// Classes - Done
// Constructor - Done
// New Keyword - Done
// This Keyword - Done
// Asynchronous Programming - Done
// Try Catch - Done
// Callbacks - Done

// Variable Declaration

// var, let, const name = ""

// JavaScript Block = {}

// var name = "Muzammil"; // Muzammil
// console.log(name);

// var name = "Ahmed"; // Ahmed
// console.log(name);

// name = "Arshad";
// console.log(name);

// let name = "Arshad";

// Redeclaration is not possible in let
// let name = "Muzammil"

// name = "Muzammil";

// console.log(name);

// const name = "Muzammi";

// Redeclaration is not possible at all with const

// Assigning to the constant variable is not possible
// name = "Arshad";

// console.log(name);

// Scoping

// Block Scope

// Global Scope
// var name = "Muzammil";

// function greet() {
//   // Block Scope
//   var name = "Ahmed";

//   function testing() {
//     // Nested Scope
//     var testingVar = "";
//   }
//   console.log(name);
// }

// greet();
// console.log(name);

// Global Execution Context

// With Respect to Variable

// console.log(a);

// let a = 20;

// console.log(a);

// With Respect to Function

// greet();

// Memory Related Code
// function greet() {
// console.log("I am greet function");
// }

// Stack -> LIFO -> Last In First Out
// Queue -> FILO -> First In Last Out

// function greet() {}
// const greet = () => {} // We mostly use this fat arrow function

// setTimeout is not JS in built function, it's a part of WebAPI
// WebAPI -> Geolocation

// console.log("Start");

// setTimeout(() => {
//   console.log("I will run after 5 seconds");
// }, 0); // 5000 ms = 5 seconds

// console.log("End");

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer();

// counter(); // 1
// counter(); // 2
// counter(); // 3

// let name = "Muzammil";

// let myObj = {
//   name,
// };

// console.log(myObj);

// Closures
// function bankAccount(userBalance) {
//   let balance = userBalance;

//   function deposit(amount) {
//     balance += amount;
//     console.log(balance);
//   }

//   function withdraw(amount) {
//     balance -= amount;
//     console.log(balance);
//   }

//   return {
//     deposit,
//     withdraw,
//   };
// }

// const account = bankAccount(1000);

// account.deposit(500);

// account.withdraw(200);

// Car Company -> Template (Same)
// Changeable Things -> Design, Location

// Object Literals and This Keyword

// const user1 = {
//   name: "Muzammil",
//   age: 12,
//   greet: function () {
//     console.log(`Hello ${this.name} your age is ${this.age}`);
//   },
// };

// const user2 = {
//   name: "Ahmed",
//   age: 15,
//   greet: function () {
//     console.log(`Hello ${this.name} your age is ${this.age}`);
//   },
// };

// console.log(user1);
// user1.greet();
// user2.greet();

// Classes / Object Oriented Programming (OOPS)

// let myObj = {};

// console.log(myObj);

// myObj.name = "Ahmed";

// console.log(myObj);

// class User {
//   constructor(name, age) {
//     this.name = name; // {name: "Muzammil"}
//     this.age = age; // {age: 12}
//   }

//   displayUserInformation() {
//     console.log("I am being called");
//     console.log({
//       name: this.name,
//       age: this.age,
//     });
//   }

//   greet() {
//     console.log(`Hello ${this.name} your age is ${this.age}`);
//   }
// }

// const user1 = new User("Muzammil", 12); // Creating Instance of Class User
// user1.displayUserInformation();
// user1.greet();

// class Product {
//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }

//   applyDiscount(percent) {
//     return this.price - (this.price * percent) / 100;
//   }
// }

// const mobile = new Product(1, "Iphone", 1200); // Created Instance of new Product
// const discountedPrice = mobile.applyDiscount(10);
// console.log(discountedPrice);

// class Cart {
//   // Run at first
//   constructor() {
//     this.items = [];
//   }

//   addItem(product) {
//     this.items.push(product);
//   }

//   getTotal() {
//     return this.items.reduce((sum, item) => sum + item.price, 0);
//   }
// }

// const cart1 = new Cart();
// cart1.addItem({ name: "Iphone", price: 1200 });
// cart1.addItem({ name: "Apple", price: 200 });
// console.log(cart1.getTotal());

// const cart2 = new Cart();
// cart2.addItem({ name: "Samsung", price: 2000 });

// const totalAmount = cart2.getTotal();
// console.log(totalAmount);

// Synchronous Programming

// console.log("Start");

// function syncTask() {
//   for (let i = 0; i < 10000; i++) {} // heavy task
//   console.log("Task completed");
// }

// syncTask();
// console.log("End");

// Asynchronous Programming

// console.log("Start");

// setTimeout(() => {
//   console.log("Async Task");
// }, 2000);

// console.log("End");

// Promises - Duty

// States of Promise
// -> Pending
// -> Fulfil
// -> Reject

// let apiResponse = {
//   json: function () {},
// };

// const ul_list = document.getElementById("unorder-list");
// const alert_div = document.getElementById("alert-div");

// const getUserData = async (callback) => {
//   try {
//     // Fetching
//     // GET Request -> Default Method
//     // POST Request
//     // PUT Request
//     // PATCH Request
//     // DELETE Request

//     // Pending
//     const apiResponse = await fetch("https://dummyjson.com/users", {
//       method: "GET",
//     });
//     // console.log(apiResponse);
//     // Result
//     const data = await apiResponse.json();
//     const usersData = data.users;

//     usersData.map((user) => {
//       ul_list.innerHTML += `
//       <li>${user.firstName}</li>`;
//     });

//     callback();
//   } catch (error) {
//     alert_div.innerText = "Something went wrong please try again later";
//   }
// };

// function successMessage() {
//   alert("The users data has been fetched succesfully");
// }

// getUserData(successMessage);

// function sum(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// function displayResult(result) {
//   console.log(
//     "The result of a + b is: ",
//     result + " This result is printed by Muzammil"
//   );
// }

// sum(10, 15, displayResult);
