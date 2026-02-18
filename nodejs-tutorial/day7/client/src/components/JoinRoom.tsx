import React, { useState } from "react";

const JoinRoom = ({
  socket,
  setIsRoomJoined,
  roomId,
  setRoomId,
  username,
  setUsername,
}: {
  socket: any;
  setIsRoomJoined: any;
  roomId: string;
  setRoomId: any;
  username: string;
  setUsername: any;
}) => {
  const handleClick = () => {
    socket.emit("join-room", {
      username: username,
      roomId: roomId,
    });

    setIsRoomJoined(true);
  };
  return (
    <div className="bg-white shadow-xl shadow-white/70 p-8 rounded-lg">
      <h3 className="text-4xl text-center font-semibold mb-6">
        Enter your information
      </h3>
      <div className="flex flex-col gap-6 mt-8">
        <input
          placeholder="Enter Username"
          className="border outline-none px-4 py-3 rounded-md"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Enter Room ID"
          className="border outline-none px-4 py-3 rounded-md"
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white w-full py-4 rounded-md hover:opacity-80 transition-all duration-300 ease-in-out cursor-pointer"
        >
          Enter Room
        </button>
      </div>
    </div>
  );
};

export default JoinRoom;
