import React, { useState } from "react";

const MessageWindow = ({ messages }) => {
  return (
    <div>
      {messages.map((msg) => (
        <p>
          {msg.message} - {msg.sender}
        </p>
      ))}
    </div>
  );
};

export default MessageWindow;
