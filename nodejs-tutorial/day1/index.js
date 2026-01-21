// Two Types of Syntax in JS
// 1. Common JS - require
// 2. Module Based Syntax - import

// import { createServer } from 'node:http';
// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });
// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// import express from "express";

// const app = express();

// app.get("/hello-world", (req, res) => {
//   console.log("Requested ip", req.ip);
//   console.log("This express server is being called");
//   res.json({
//     success: true,
//     message: "Your request has been listened by the express server",
//   });
// });

// app.listen(3002, () => {
//   console.log("The express server is listening on PORT 3002");
// });

// HTTP Request methods
// - GET - Get some data - fetch some data
// - POST - Post some data in the backend
// - PUT - Update the data - Edit the data
// - PATCH - Similar to update the data - Edit the data
// - DELETE - Delete the data

import express from "express";
import todoRoutes from "./routes/todo.route.js";

const app = express();

const PORT = 3000;

app.use(express.json()); // Parse JSON data into req.body
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("OK");
});

// GET /todos/ -> Give all the todos - Fetch all the todos
// POST /todos/ -> Store the todo
// PUT - PATCH - /todos/:id -> Edit the data
// DELETE -> /todos/:id Delete the todo

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});

// localhost:3002/auth
// localhost:3002/todos
// localhost:3002/user
