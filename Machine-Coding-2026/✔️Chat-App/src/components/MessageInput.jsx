import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSend(text);
    setText("");
  };
  return (
    <div className="input-box">
      <input
        type="text"
        value={text}
        placeholder="Type Message here..."
        onChange={(e) => setText(e.target.value)}
        className="input"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
