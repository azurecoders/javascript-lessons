import express from "express";
import { createServer } from "node:http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// io.on("connection", (socket) => {
//   console.log(`A client has been connected ${socket.id}`);

//   socket.on("join-room", (roomId) => {
//     socket.join(roomId);
//     console.log(`User ${socket.id} has joined the room ${roomId}`);
//   });

//   socket.on("user-message", (info) => {
//     const { roomId, message } = info;
//     io.to(roomId).emit("backend-message", message);
//   });

//   socket.on("disconnect", () => {
//     console.log(`Connection with socket id ${socket.id} has been disconnected`);
//   });
// });

// // Publically Served Folder
// app.use(express.static(path.resolve("public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("index.html"));
// });

io.on("connection", (socket) => {
  console.log(`Socket connect with id ${socket.id}`);

  socket.on("join-room", (data) => {
    const { roomId, username } = data;
    socket.join(roomId);

    io.to(roomId).emit("joined-room", {
      username: username,
      roomId: roomId,
    });
  });

  socket.on("user-message", (data) => {
    const { roomId, message, username } = data;

    io.to(roomId).emit("emitted-message", {
      message: message,
      from: username,
    });
  });
});

server.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
});
