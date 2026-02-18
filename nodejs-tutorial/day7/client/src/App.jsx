import React, { useState } from "react";
import { io } from "socket.io-client";
import Messages from "./components/Messages";
import JoinRoom from "./components/JoinRoom";

const socket = io("http://localhost:3000");

const App = () => {
  const [isRoomJoined, setIsRoomJoined] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="bg-neutral-900 h-screen flex items-center justify-center">
      {isRoomJoined ? (
        <Messages socket={socket} roomId={roomId} username={username} />
      ) : (
        <JoinRoom
          socket={socket}
          setIsRoomJoined={setIsRoomJoined}
          setRoomId={setRoomId}
          roomId={roomId}
          username={username}
          setUsername={setUsername}
        />
      )}
    </div>
  );
};

export default App;
