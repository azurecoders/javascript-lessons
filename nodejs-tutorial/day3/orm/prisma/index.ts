import express from "express";
import { prisma } from "./lib/prisma";

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  }); // SELECT * FROM users;
  console.log(users);
  res.status(200).json({ message: "List of users", data: users });
});

app.post("/user", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
  res.status(201).json({ message: "User created", data: user });
});

app.post("/post", async (req, res) => {
  const { title, content } = req.body;
  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
      published: true,
      authorId: 1,
    },
  });
  res.status(201).json({ message: "Post created", data: post });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
