import React, { useEffect, useRef, useState } from "react";

const Messages = ({
  socket,
  roomId,
  username,
}: {
  socket: any;
  roomId: string;
  username: string;
}) => {
  const [inputField, setInputField] = useState("");
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const handleSendMessage = () => {
    socket.emit("user-message", {
      roomId: roomId,
      username: username,
      message: inputField,
    });

    setInputField("");
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();

    socket.on("joined-room", (data: any) => {
      setMessages((prev) => [
        ...prev,
        {
          message: `User ${data.username} has joined the room ${data.roomId}`,
          from: "System",
        },
      ]);
    });

    socket.on("emitted-message", (data: any) => {
      setMessages((prev) => [
        ...prev,
        { message: data.message, from: data.from },
      ]);
    });
  }, []);

  return (
    <div className="w-[600px] bg-white shadow-xl shadow-white/70 p-8 rounded-lg">
      <h3 className="text-4xl text-center font-semibold mb-6">
        Enter your message - {username}
      </h3>
      {messages.map((msg) => (
        <div>
          {msg.from} - {msg.message}
        </div>
      ))}
      <div className="flex flex-col gap-6 mt-8">
        <input
          placeholder="Enter message"
          className="border outline-none px-4 py-3 rounded-md"
          onChange={(e) => setInputField(e.target.value)}
          value={inputField}
          ref={inputRef}
        />

        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white w-full py-4 rounded-md hover:opacity-80 transition-all duration-300 ease-in-out cursor-pointer"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Messages;
