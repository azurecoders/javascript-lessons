# JavaScript Complete Beginner Roadmap (With HTML & CSS Touch)

---

## 1. Introduction to Web Development

### What is HTML?

HTML provides the **structure** of a webpage.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
    <button id="btn">Click Me</button>
  </body>
</html>
```

### Important HTML Tags

- `<h1>` to `<h6>` – Headings
- `<p>` – Paragraph
- `<button>` – Button
- `<input>` – Input field
- `<div>` – Container

### Attributes

```html
<button id="submitBtn" class="btn">Submit</button>
```

---

## 2. CSS Basics (Short Touch)

CSS is used to **style** HTML elements.

```css
body {
  font-family: Arial;
}

button {
  background-color: black;
  color: white;
  padding: 10px;
}
```

### CSS Selectors

- Element selector: `button`
- Class selector: `.btn`
- ID selector: `#submitBtn`

---

## 3. JavaScript Introduction

JavaScript makes websites **interactive**.

```html
<script src="script.js"></script>
```

```js
console.log("Hello JavaScript");
```

---

## 4. Variables

```js
var name = "Ali"; // old
let age = 22; // modern
const country = "Pakistan"; // constant
```

Rules:

- `let` can change
- `const` cannot change

---

## 5. Data Types

```js
let username = "Ahmed"; // String
let price = 500; // Number
let isLoggedIn = true; // Boolean
let data; // Undefined
let value = null; // Null
```

---

## 6. Operators

### Arithmetic Operators

```js
let sum = 5 + 3;
let multiply = 4 * 2;
```

### Comparison Operators

```js
5 == "5"; // true
5 === "5"; // false
```

### Logical Operators

```js
true && false;
true || false;
```

---

## 7. Conditional Statements

```js
let age = 18;

if (age >= 18) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}
```

---

## 8. Loops

### For Loop

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### While Loop

```js
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}
```

---

## 9. Functions

```js
function greet(name) {
  return "Hello " + name;
}

greet("Ali");
```

### Arrow Function

```js
const add = (a, b) => a + b;
```

---

## 10. Arrays

```js
let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");
fruits.pop();
```

Looping an array:

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

## 11. Objects

```js
let user = {
  name: "Ali",
  age: 22,
  isAdmin: false,
};

console.log(user.name);
```

---

## 12. DOM Manipulation

### Selecting Elements

```js
const button = document.getElementById("btn");
const box = document.querySelector(".box");
```

### Changing Content

```js
button.innerText = "Clicked";
box.style.background = "red";
```

---

## 13. Events

```js
button.addEventListener("click", () => {
  alert("Button Clicked");
});
```

---

## 14. Input Handling

```html
<input type="text" id="nameInput" /> <button id="showBtn">Show</button>
```

```js
const input = document.getElementById("nameInput");
const showBtn = document.getElementById("showBtn");

showBtn.addEventListener("click", () => {
  console.log(input.value);
});
```

---

## 15. Mini Projects (Practice)

1. Counter App
2. Color Changer
3. Calculator
4. To-Do List
5. Form Validation

---

## 16. Best Practices

- Use `console.log()` for debugging
- Write clean and readable code
- Practice daily
- Build small projects

---

### 🎯 Goal

After completing this roadmap, the student will:

- Understand JavaScript fundamentals
- Manipulate HTML using JS
- Build small interactive web projects

---

**Instructor:** Muzammil Ahmed Khan
