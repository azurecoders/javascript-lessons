import React, { useState } from "react";

const MessageInput = ({ setMessages }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "Muzammil",
        message: message,
      },
    ]);
  };

  return (
    <div>
      <input
        placeholder="Enter your message"
        className="border rounded-md px-2 py-1 m-4"
        onChange={({ target }) => setMessage(target.value)}
      />
      <button
        onClick={handleSendMessage}
        className="bg-green-700 text-white py-1 px-3 rounded-md cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out"
      >
        Send Message
      </button>
    </div>
  );
};

export default MessageInput;
