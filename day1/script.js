// Console.log is mostly used for debugging
// Don't leave it in the production
// console.log("I am JavaScript File");

// Variable Declaration

// Variables declared using var can be updated later
// var name = "Ahmed";
// var age = 18;
// var isValid = true;

// let;
// const

// var PORT = process.env.PORT
// const second_name = "Arshad";

// console.log("My name is " + name);

// console.log("This is your class " + name);

// name = "Muzammil";

// console.log("The name is changed " + name);

// Variables declared using const can not be updated
// second_name = "Ibrahim";

// Data Types

// Primitive Data Types
// String => "hello world!" 'Hello World'
// Integer => Number => 18 19 20 20000
// Float => Number => 18.43 8.8 234.999 // Decimal Point Values
// Boolean => True / False => true / false
// Null => var phoneNumber = null;
// Undefined = var gender = undefined;

// var string_data = "Hello World";
// var integer_data = 18;
// var float_data = 18.9;
// var boolean_data_true = true;
// var boolean_data_false = false;
// var isValid = null;
// var notDefined = undefined;

// Empty Declaration
// var name = "";
// var name;

// name = "Muzammil"

// Operators - Numerical Operations - Conditional Based Operations

var a = 10;
var b = 20;

// Arithmetic Operators
console.log("The sum of a + b is: ", a + b);
console.log("The sum of a - b is: ", a - b);
console.log("The sum of a * b is: ", a * b);
console.log("The sum of a / b is: ", a / b);
console.log("The sum of a % b is: ", a % b); // This will print the remainder

// Comparison Operators
console.log("A is Greater than B: ", a > b);
console.log("B is Greater than A: ", a < b);
console.log("A is equal to B: ", a == b);

// Logical Operators
let isNameEmpty = true; // true
let isPasswordValid = false;
let isLoggedin = true;

console.log(isNameEmpty && isPasswordValid); // both must be true; // And Operator
console.log(isNameEmpty || isPasswordValid); // one must be true // Or Operator
console.log(!isLoggedin); // Not Operator
